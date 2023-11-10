import { useParams,  Link  } from "react-router-dom";
import CourseNavigation from "./CourseNavigation"
import {Routes, Route, Navigate} from "react-router";
import Modules from "./Modules";
import {FaBars} from "react-icons/fa"
import {FaGlasses} from "react-icons/fa6"
import { useEffect, useState } from "react";
import Home from "./Home"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "../Grades";
import axios from "axios";


function Courses({courses}) {
  const { id } = useParams();

  const URL = "http://localhost:4000/api/courses";

  const [navItem, setNavItem] = useState("Home");

  const [course, setCourse] = useState({});

  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  ;

  useEffect(() => {
    findCourseById(id)
  }, [id]);



  


  console.log("course page courses props: "+ courses)
  // const [tempCourses, settempCourses] = useState(courses);



  return (

    <div>


            <div className="menu-name">

                  <div className="breadcrumb-container">
                      <FaBars/>
                      <nav aria-label="breadcrumb" style={{marginLeft:5}}>
                          <ol className="breadcrumb" style={{margin:0}}>
                            <li className="breadcrumb-item"><Link to={`Home`} style={{textDecoration:"none", color:"red"}} onClick={()=>(setNavItem("Home"))}>{`${course.number} ${course.name}`}</Link></li>
                            
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
                              <Route path="/Home" element={<Home course={course}/>} />
                              <Route path="/Modules" element={<Modules course={course}/>} />
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