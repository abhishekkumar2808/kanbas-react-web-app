import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {FaRegCheckCircle} from "react-icons/fa"
import {FaEllipsisVertical} from "react-icons/fa6"
import "./index.css"


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { id } = useParams();
  console.log("sdfsfsdsf"+id)
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${id}/Assignments`);
  };
  return (
    <div>
        <div class="top-header-container">
                                <div>

                                </div>
                                <div class="icons">
                                    <FaRegCheckCircle class="fa-solid fa-check" style={{color:"#24c421", marginRight:5}}/>
                                    <span style={{marginBottom:0, color:"#24c421" ,marginRight:5}}>Published</span>
                                    <a class="btn btn-light text-nowrap"  href="index.html" role="button"><FaEllipsisVertical/></a>
                                        
                                </div>
        </div>

       <hr/>



      <h3>Assignment Name</h3>
      <input value={assignment.title}
             className="form-control mb-2" />


                <div className="cancel-save" >
                        <Link to={`/Kanbas/Courses/${id}/Assignments`} 
                                className="btn btn-danger" style={{marginRight:5, width:"8%"}}>
                            Cancel
                        </Link>
                        <button onClick={handleSave} className="btn btn-success" style={{marginRight:0, width:"8%"}}>
                            Save
                        </button>
                </div>
   

               
    </div>
  );
}


export default AssignmentEditor;