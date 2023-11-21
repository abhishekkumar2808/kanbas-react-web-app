import axios from "axios";

const MyModal = ({showModal, setShowModal, type, data, setNewCourse, courses, setCourses}) => {

  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  
    const resetData =() =>{
        const t = {
            name: "",
            number: "",
            startDate: "",
            endDate: ""
        };
        setNewCourse(t);


    }

    const addFunc = async () => {

    
    const response = await axios.post(URL, data);
    response.data && console.log("coursedsf: "+ JSON.stringify(response.data));

    setShowModal(false)
    resetData();
    setCourses([...courses, response.data]);
    }

    const editFunc =async () => {

        console.log(JSON.stringify(data));
        

        setShowModal(false);
        resetData();

        const response = await axios.put(`${URL}/${data._id}`, data);
    
        setCourses(
            courses.map((c) => {
              if (c._id === data._id) {
                return data;
              } else {
                return c;
              }
            })
          );
      
    }

  return (
    

    
      

      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" data-bs-backdrop="static" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{`${type} Course`} </h5>
              <button type="button" className="btn-close" onClick={() => {resetData();setShowModal(false);}} data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                        <input type="text" className="form-control" id="recipient-name" placeholder='Node JS' value={data.name} onChange={(e) => setNewCourse({ ...data, name: e.target.value }) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Number:</label>
                        <input type="text" className="form-control" id="recipient-name" placeholder='CS1001' value={data.number} onChange={(e) => setNewCourse({ ...data, number: e.target.value }) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Start Date:</label>
                        <input type="text" className="form-control" id="recipient-name" placeholder='YYYY-MM-DD' value={data.startDate} onChange={(e) => setNewCourse({ ...data, startDate: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">End Date:</label>
                        <input type="text" className="form-control" id="recipient-name" placeholder='YYYY-MM-DD' value={data.endDate} onChange={(e) => setNewCourse({ ...data, endDate: e.target.value }) }/>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
              <button type="button" style={{width:"20%"}} className="btn btn-secondary" onClick={() => {resetData(); setShowModal(false);}}>
                Close
              </button>
              <button type="button" style={{width:"20%"}} className="btn btn-primary" onClick={(event) =>{
                event.preventDefault();
                if(type === "Add"){
                    addFunc();
                }
                else{
                    editFunc();
                }
                }}>
                {type}
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default MyModal;
