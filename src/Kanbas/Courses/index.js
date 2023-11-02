import { useParams,  Link  } from "react-router-dom";
import CourseNavigation from "./CourseNavigation"
import {Routes, Route, Navigate} from "react-router";
import Modules from "./Modules";
import {FaBars} from "react-icons/fa"
import {FaGlasses} from "react-icons/fa6"
import { useState } from "react";
import Home from "./Home"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "../Grades";


function Courses({courses, setCourses}) {
  const { id } = useParams();



  const [navItem, setNavItem] = useState("Home");
  const course = courses.find((course) => course._id === id);


  const courseID = course.number


  const [tempCourses, settempCourses] = useState(courses);



  return (

    <div>


            <div className="menu-name">

                  <div className="breadcrumb-container">
                      <FaBars/>
                      <nav aria-label="breadcrumb" style={{marginLeft:5}}>
                          <ol className="breadcrumb" style={{margin:0}}>
                            <li className="breadcrumb-item"><Link to={`Home`} style={{textDecoration:"none", color:"red"}} onClick={()=>(setNavItem("Home"))}>{`${courseID} ${course.name}`}</Link></li>
                            
                            <li className="breadcrumb-item active" aria-current="page">{navItem}</li>
                          </ol>
                      </nav>
                  </div>

                  <div>
                      <button className="btn btn-light text-nowrap"  ><FaGlasses/> Student View</button>
                  </div>
             </div>

             <hr/>

            <div className="row">
                  <div className="col-2">
                  <CourseNavigation navItem={navItem} setNavItem={setNavItem}/>
                  </div>

                  <div className="col-10">
                      
                      
                      <div
                        className="overflow-y-scroll bottom-0 end-0"
                        style={{
                          left: "320px",
                          top: "50px",
                        }}
                      >
                            <Routes>
                              <Route path="/" element={<Navigate to="Home" />} />
                              <Route path="/Home" element={<Home tempCourses={tempCourses}/>} />
                              <Route path="/Modules" element={<Modules tempCourses={tempCourses}/>} />
                              <Route path="/Assignments" element={<Assignments/>} />
                              <Route path="/Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                              <Route path="/Grades" element={<Grades />} />
                            </Routes>
                      </div>
                  </div>

            </div>



      </div>



  );
}
export default Courses;