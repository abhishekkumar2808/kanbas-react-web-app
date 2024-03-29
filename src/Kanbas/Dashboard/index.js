import { Link } from "react-router-dom";
import "./index.css"
import { useState } from "react";
import MyModal from "./MyModal";
import axios from "axios";


function Dashboard({courses, setCourses}) {

  const [showModal, setShowModal] = useState(false);
  const[showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
        
        name: "",
        number: "",
        startDate: "",
        endDate: ""

  })

  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;





  const deleteCourse = async (id) =>{

      const response = axios.delete(`${URL}/${id}`);

      setCourses(courses.filter((val) => (val._id !== id)))
  }


    return (
    <div className="container-fluid">
      
      <MyModal showModal={showModal} setShowModal={setShowModal} type="Edit" setNewCourse={setNewCourse} data= {newCourse} courses={courses} setCourses={setCourses}/>
      <MyModal showModal={showAddModal} setShowModal={setShowAddModal} type="Add" setNewCourse={setNewCourse} data={newCourse} courses={courses} setCourses={setCourses}/>

      
      <h2 style={{marginTop:8}}>Dashboard</h2>

      <hr style={{margin:0}}/>

      <div className="card-buttons-container" style={{marginTop:8}}>
         <h2>Published Courses({courses.length})</h2>
         <button className="btn " style={{color:"white", backgroundColor:"#566E3D"}}
          onClick={
                        (event) => {
                          console.log("state value:"+ showModal)
                          event.preventDefault();
                          setShowAddModal(!showAddModal)
                          }
            }>+ Add Courses</button>
      </div>
      
      <div className="row flex-wrap  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4" style={{marginBottom:10, marginLeft:0}}>

        {courses.map((course, index) => (

          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item " style={{width: "250px", marginRight: "20px"}}>

            <div className="card h-80 shadow border-0" style={{width:"250px"}}>
                <img src= {(course["img-url"])?`${course["img-url"]}`:`../../images/car.jpeg`} className="card-img-top" alt={course.name} style={{height:"140px"}} />
                <div className="card-body">
                    <h5 className="card-title">{course.number}<span> </span>{course.name}</h5>
                    {/* <p className="card-text"></p> */}
                    <p className="card-text">{`Start Date: ${course.startDate}`}</p>
                    <div className="card-buttons-container">
                      <button style={{width:"47%"}} className="btn btn-danger" 
                        onClick={(event) => 
                        { event.preventDefault();
                          deleteCourse(course._id)}
                        }>Delete</button>

                      <button style={{width:"47%", backgroundColor:"#C0C0C0"}}  className="btn " 
                      onClick={
                        (event) => {
                          console.log("state value:"+ showModal)
                          event.preventDefault();
                          setNewCourse(course);
                          setShowModal(!showModal)
                          }
                        }>Edit</button>
                    </div>
                    
                </div>
            </div>

          </Link>

        ))}

      </div>
    </div>
  );
}
export default Dashboard;