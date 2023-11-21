import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {FaRegCheckCircle} from "react-icons/fa"
import {FaEllipsisVertical} from "react-icons/fa6"
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {updateAssignment, addAssignment, setAssignment} from "../assignmentsReducer";
import * as services from "../services";

function AssignmentEditor({course}) {

  const assignment = useSelector((state) => state.assignmentsReducer.assignment);

  const dispatch = useDispatch();

  // const { id } = useParams();
  const navigate = useNavigate();

  
  // const courseID = db.courses.find((course)=>(course._id === id))
  const courseNum = course.number;



  const handleSave = () => {


    if(assignment._id){
      //dispatch(updateAssignment(assignment))
      console.log("uppdate here")
      services.updateAssignment(assignment._id, assignment)
        .then(() =>{ console.log("to be updated assingment: "+ JSON.stringify(assignment));dispatch(updateAssignment(assignment)) });
    }
      
    else{
      // dispatch(addAssignment({...assignment, course: courseNum}))
      services.createAssignment(courseNum, assignment)
          .then((newAssignment) =>{ dispatch(addAssignment({...newAssignment, course: courseNum})) });
    }

    dispatch(setAssignment({ title: "New assignment", description: "New Description", points:"", dueDate: "", availableFromDate:"", availableUntilDate:""}))
    navigate(`/Kanbas/Courses/${course._id}/Assignments`);
  };

  return (
    <div>
        <div className="top-header-container">
                                <div>

                                </div>
                                <div className="icons">
                                    <FaRegCheckCircle class="fa-solid fa-check" style={{color:"#24c421", marginRight:5}}/>
                                    <span style={{marginBottom:0, color:"#24c421" ,marginRight:5}}>Published</span>
                                    <a class="btn btn-light text-nowrap"  href="index.html" role="button"><FaEllipsisVertical/></a> 
                                        
                                </div>
        </div>

       <hr/>



      <label htmlFor="title"><h5>Assignment Name</h5></label>
      <input value={assignment.title} id="title" required
             className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value })) }/>
      
      <br/> 
      <label htmlFor="description"><h5>Assignment Description</h5></label>  
      <br/>  
      <textarea rows="5" required className="border" id="description" style={{width:"100%", borderRadius:6}} value={(assignment.description)?assignment.description : "" } onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value })) }></textarea>
      
      
      
    
    <div style={{marginTop:40}}>
        
      <div className="row">
          <div className="col-5" style={{display:"flex", justifyContent:"flex-end"}}>
              <label htmlFor="points"><h5 style={{margin:0}}>Points</h5></label>
          </div>
          <div className="col-7">
              <input value={(assignment.points)?assignment.points : "" } id="points" placeholder="eg: 87/100" 
             className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value })) } />
          </div>
      </div>

      <div className="row" style={{marginTop:20}}>
          <div className="col-5" style={{display:"flex", justifyContent:"flex-end"}}>
            <label ><h5>Assign</h5></label>
          </div>
          <div className="col-7" style={{paddingLeft:12, paddingRight:12}}>
            <div  className="assign-body border" style={{padding:20, borderRadius:6}}>
              
              <div>
                  <label htmlFor="assign-due"><h6>Due</h6></label>
                  <input value={(assignment.dueDate)?assignment.dueDate : "" } id="assign-due" placeholder="YYYY-MM-DD"
                    className="form-control mb-2"  onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value })) }/>
              </div>
              <div>
                  <div className="row">
                    <div className="col">
                        <label htmlFor="assign-available-from"><h6>Available from</h6></label>
                        <input value={(assignment.availableFromDate)?assignment.availableFromDate : "" } id="assign-available-from" placeholder="YYYY-MM-DD"
                          className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value })) }/>
                    </div>
                    <div className="col">
                        <label htmlFor="assign-available-to"><h6>Until</h6></label>
                        <input value={(assignment.availableToDate)?assignment.availableToDate : "" } id="assign-available-to" placeholder="YYYY-MM-DD"
                          className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, availableToDate: e.target.value })) }/>
                    </div>

                  </div>
              </div>
            </div>
          </div>
      </div>

    </div>

    <hr/>

    <div className="cancel-save" >
            <Link to={`/Kanbas/Courses/${course._id}/Assignments`} 
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