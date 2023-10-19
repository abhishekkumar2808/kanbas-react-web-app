import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation"
import {Routes, Route, Navigate} from "react-router";
import Dashboard from "../Dashboard"

import {FaBars} from "react-icons/fa"
import {FaGlasses} from "react-icons/fa6"
import { useState } from "react";

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
                            <li class="breadcrumb-item"><a href="../courses/index.html" style={{textDecoration:"none", color:"red"}}>{`${courseID} ${course.name}`}</a></li>
                            
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
                              
                              <Route path="Home" element={<h1>Home</h1>} />
                              <Route path="Modules" element={<h1>Modules</h1>} />
                              <Route path="Assignments" element={<h1>Assignments</h1>} />
                              <Route
                                path="Assignments/:assignmentId"
                                element={<h1>Assignment Editor</h1>}
                              />
                              <Route path="Grades" element={<h1>Grades</h1>} />
                            </Routes>
                      </div>
                  </div>

            </div>



      </div>



  );
}
export default Courses;