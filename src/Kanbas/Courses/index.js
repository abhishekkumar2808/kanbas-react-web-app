import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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

function Courses() {
  const { id } = useParams();
  console.log(id)
  const [navItem, setNavItem] = useState("Home");
  const course = db.courses.find((course) => course._id === id);
  const courseID = course.number
  return (

    <div>


            <div class="menu-name">

                  <div class="breadcrumb-container">
                      <FaBars/>
                      <nav aria-label="breadcrumb" style={{marginLeft:5}}>
                          <ol class="breadcrumb" style={{margin:0}}>
                            <li class="breadcrumb-item"><Link to={`Home`} style={{textDecoration:"none", color:"red"}} onClick={()=>(setNavItem("Home"))}>{`${courseID} ${course.name}`}</Link></li>
                            
                            <li class="breadcrumb-item active" aria-current="page">{navItem}</li>
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
                              <Route path="/Home" element={<Home/>} />
                              <Route path="/Modules" element={<Modules/>} />
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