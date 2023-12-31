import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
let URL = `${API_BASE}`.replace("api","");

function WorkingWithArrays() {
    const API = URL+"a5/todos";

    const [errorMessage, setErrorMessage] = useState(null);

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });
    
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };

    const removeTodo = async (todo) => {
      const response = await axios
        .get(`${API}/${todo.id}/delete`);
      setTodos(response.data);
    };

    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    };

    const fetchTodoById = async (id) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };

    const updateTitle = async () => {
      const response = await axios.get(
        `${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    };

    const postTodo = async () => {
      console.log("saa: "+JSON.stringify(todo))
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };

    const deleteTodo = async (todo) => {
      try{
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
      }
      catch(error) {
        console.log(error);
        setErrorMessage(error.response.data.message);
  
      }
      
    };

    
  const updateTodo = async () => {
    try {
      const response = await axios.put(
        `${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (
        t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);

    }

  };

  useEffect(() => {
      fetchTodos();
    }, []);

  

    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>

        <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: e.target.value })} />

        <input value={todo.title}
        onChange={(e) => setTodo({ ...todo,
          title: e.target.value })} />

        {/* <button onClick={createTodo} 
              className="btn btn-primary mb-2 w-100">
              Create Todo
        </button> */}

        
        <textarea
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
        />
        <br/>
        <input
          onChange={(e) => setTodo({
            ...todo, due: e.target.value })}
          value={todo.due} type="date"
        />
        <br/>
        <label>
          <input
            onChange={(e) => setTodo({
              ...todo, completed: e.target.checked })}
            value={todo.completed} type="checkbox"
          /> Completed
        </label>
        <br/>
        <button onClick={postTodo} className="btn btn-primary" >
          Post Todo
        </button>
        <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100"> 
          Update Title
        </button>
        <br/>

        <div>
          
          {errorMessage && (
            <div className="alert alert-danger mb-2 mt-2">
              {errorMessage}
            </div>
          )}
          
        </div>

        <ul className="list-group">
        {todos.map((tod) => (
          <li key={tod.id}
              className="list-group-item-action" onClick={() => setTodo({...tod})}>
              <div >
              <button
                  onClick={() => deleteTodo(tod)}
                  className="btn btn-danger float-end ms-2">
                  Delete
                </button>
                <button  className="btn btn-warning float-end ms-2"
                onClick={() => {setTodo({...todo, id: tod.id}); updateTodo();}}>
                Update Todo
                </button>
                <input
                  checked={tod.completed}
                  type="checkbox" readOnly
                />
                {tod.title}
                <p>{tod.description}</p>
                <p>{tod.due}</p>
              </div>

            
          </li>
        ))}
      </ul>
        <a href={API} className="btn btn-primary me-2"> 
          Get Todos
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={(todo.id)? todo.id:""}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>

        <a href={`${API}/${todo.id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>

        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
            className="btn btn-primary me-2" >
            Get Completed Todos
        </a>

        <h4>Creating new Items in an Array</h4>
        <a href={`${API}/create`}
            className="btn btn-primary me-2">
            Create Todo
        </a>

        
        <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
        />

        <h3>Deleting from an Array</h3>

        <a href={`${API}/${todo.id}/delete`}
            className="btn btn-primary me-2">
            Delete Todo with ID = {todo.id}
        </a>

        <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
        />

        <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
        />
        <h3>Updating an Item in an Array</h3>
        <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary me-2" >
            Update Title to {todo.title}
        </a>

        <h3>Updating an Item completed status in an Array</h3>

        <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
        />

        <input
        id="completedCheckbox"
        type="checkbox"
        onChange={(e) =>{

                setTodo({ ...todo,
                                    completed: !todo.completed })
                } }
        value={todo.completed}
        
         />
         <label htmlFor="completedCheckbox">Completed</label>
         <br/>
         <a
            href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary me-2" >
            Update completed
        </a>


        <h3>Updating an Item description in an Array</h3>

        <input
        value={todo.id}
        onChange={(e) => setTodo({
        ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
        />

        <input
        id="completedCheckbox"
        type="text"
        onChange={(e) =>{

                setTodo({ ...todo,
                                    description: e.target.value })
                } }
        value={todo.description}
        className="form-control mb-2"

        />

        <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary me-2" >
            Update description
        </a>

        


      </div>
    );
  }
  export default WorkingWithArrays;