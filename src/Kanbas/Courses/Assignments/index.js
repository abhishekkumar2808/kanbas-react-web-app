import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

import {FaEllipsisVertical} from "react-icons/fa6"
import {FaCheck, FaPlus} from "react-icons/fa"
import "./index.css"


function Assignments() {
  const { id } = useParams();
  const courseID = db.courses.find((course)=>(course._id === id))
  const courseNum = courseID.number;
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseNum);
  return (
    <div>
      <h2>Assignments for course <span style={{color:"red"}}>{courseID.name}</span></h2>
      <div class="search-bar">
            <input type="text" class="form-control w-25" placeholder="Search for Assignment"/>
            <div class="float-end">
                <a class="btn btn-light text-nowrap"  href="index.html" role="button">+Group</a> 
                <a class="btn btn-danger text-nowrap"  href="index.html" role="button">+ Assignment</a> 
                <a class="btn btn-light text-nowrap"  href="index.html" role="button"><FaEllipsisVertical/></a> 
            </div>
        </div>

        <hr/>

        <div className="list-group">
            <div className="assignment-content">
                    <div className="assign-body list-group">

                            <div className="header-container list-group-item" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", backgroundColor:"rgb(182, 172, 172)"}}> 

                                
                                    <div className="icon-begin">
                                        <FaEllipsisVertical/>
                                        <FaEllipsisVertical/>
                                        <span className="text" style={{fontSize:27}}><b>Assignments</b></span>
                                    </div>
                                    
                                    <div className="icon-end">
                                        <button type="button" className="btn btn-light header">40% of Total</button>
                                        <FaPlus style={{marginLeft:5}}/>
                                        <FaEllipsisVertical/>
                                                            
                                    </div>
                            </div>

                            {
                                courseAssignments.map((assignment) => (
                                        <Link
                                            key={assignment._id}
                                            to={`/Kanbas/Courses/${id}/Assignments/${assignment._id}`}
                                            style={{textDecoration:"none"}}
                                        >
                                                <div className="assign-container list-group-item" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 

                                                                                
                                                        <div className="icon-begin">
                                                            <FaEllipsisVertical/>
                                                            <FaEllipsisVertical/>
                                                            <span className="text">{assignment.title}</span>
                                                        </div>

                                                        <div class="icon-end">
                                                            
                                                            <FaCheck style={{color:"#24c421"}}/>
                                                            <FaEllipsisVertical/>
                                                        </div>
                                                </div>

                                            
                                        </Link>
                                ))
                            }

                            
                            


                                            
                                            
                                            
                                            

                    </div> 
            </div>



        </div>









    </div> //outter most
  );
}
export default Assignments;