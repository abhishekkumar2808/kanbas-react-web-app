import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import db from "../../Database";
import {FaEllipsisVertical} from "react-icons/fa6"
import {FaCheck, FaPlus} from "react-icons/fa"
import "./index.css"
import DeleteModal from "./DeleteModal";
import { useSelector, useDispatch } from "react-redux";
import { setAssignment, setAssignments } from "./assignmentsReducer";
import { getAssignments } from "./services";


function Assignments({course}) {

  const dispatch = useDispatch();
//   const { id } = useParams();
//   console.log("id: "+ id)
//   const courseID = db.courses.find((course)=>(course._id === id))
   console.log("courseID: "+ JSON.stringify(course))
  const courseNum = course.number;

  const [searchAssignment, setSearchAssignment] = useState("");
  const [dispAssigment, setDispAssignment] = useState([]);

const assignments = useSelector((state) => state.assignmentsReducer.assignments);

  const assignment = useSelector((state) => state.assignmentsReducer.assignment);


  useEffect(()=>{
    getAssignments(courseNum)
    .then((assignments) => {
            dispatch(setAssignments(assignments))
    })


  },[courseNum])

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseNum);

    useEffect(()=>{

        if(searchAssignment === ""){

            setDispAssignment([...courseAssignments]);
            console.log("inside if: "+ JSON.stringify(dispAssigment))
        }
            
        else{
            const tempAssignments = courseAssignments.filter((a) => a.title.toLowerCase().startsWith(searchAssignment.toLowerCase()) )
            console.log("temp ass: "+ JSON.stringify(tempAssignments))
            if(tempAssignments.length){
                setDispAssignment([...tempAssignments])
            }
            else{
                setDispAssignment([]);
            }
        }
        }, [searchAssignment, assignments])

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  console.log("searchASS: "+ searchAssignment)
  console.log("courseAss: "+ JSON.stringify(courseAssignments))
  console.log("dispAsss: "+ JSON.stringify(dispAssigment))
  


  return (
    <>
            {showDeleteModal && <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} assignment={assignment}/>}
            <div>

            <h2>Assignments for course <span style={{color:"red"}}>{course.name}</span></h2>

            <div className="search-bar">

                    <input type="text" onChange={(e) => setSearchAssignment(e.target.value) } className="form-control w-25" placeholder="Search for Assignment" value={searchAssignment} />

                    <div className="float-end">
                        <button className="btn btn-light text-nowrap"   >+Group</button> 
                        <Link to={`/Kanbas/Courses/${course._id}/Assignments/${assignment._id}`}>
                            <button className="btn text-nowrap" style={{backgroundColor:"#566E3D", color:"white"}}
                                onClick={() =>
                                dispatch(setAssignment(
                                    {   title: "New assignment", 
                                        description: "New Description",
                                        points:"", 
                                        dueDate: "", 
                                        availableFromDate:"", 
                                        availableUntilDate:""
                                    }
                                    ))}>+ Assignment</button>
                        </Link>

                        <button className="btn btn-light text-nowrap"  ><FaEllipsisVertical/></button> 
                    </div>
                </div>

                <hr/>

                <div className="list-group">
                    <div className="assignment-content">
                            <div className="assign-body list-group">

                                    <div className="header-container list-group-item" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", backgroundColor:"rgb(182, 172, 172)"}}> 

                                        
                                            <div className="icon-begin" style={{marginLeft:7}}>
                                                <FaEllipsisVertical/>
                                                <FaEllipsisVertical/>
                                                <span className="text" style={{fontSize:27}}><b>Assignments</b></span>
                                            </div>
                                            
                                            <div className="icon-end">
                                                <button type="button" className="btn btn-light header">40% of Total</button>
                                                <button style={{backgroundColor:"rgb(182, 172, 172)"}}><FaPlus style={{marginLeft:5}}/></button>
                                                <button style={{backgroundColor:"rgb(182, 172, 172)"}}><FaEllipsisVertical/></button>
                                                
                                                                    
                                            </div>
                                    </div>

                                    {
                                        dispAssigment.map((assign) => (
                                                <Link
                                                    key={assign._id}
                                                    to={`/Kanbas/Courses/${course._id}/Assignments/${assign._id}`}
                                                    onClick={() => dispatch(setAssignment({...assign,}))}
                                                    style={{textDecoration:"none"}}
                                                >
                                                        <div className="assign-container list-group-item" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 

                                                                                        
                                                                <div className="icon-begin">
                                                                    <FaEllipsisVertical/>
                                                                    <FaEllipsisVertical/>
                                                                    <span className="text">{assign.title}</span>
                                                                </div>

                                                                <div className="icon-end">

                                                                    <div style={{margin:3,marginRight:10}}>
                                                                            <button className="btn btn-danger btn-sm"  style={{width:"70px", marginRight:8}}
                                                                            onClick={(e) =>{

                                                                                e.preventDefault();
                                                                                dispatch(setAssignment(assign));
                                                                                setShowDeleteModal(!showDeleteModal);

                                                                            }}>Delete</button>

                                                                            <button className="btn btn-sm" style={{width:"70px", backgroundColor:"#DFE0E2"}}
                                                                             onClick={(e) =>{
                                                                                
                                                                                dispatch(setAssignment(assign));
                                                                            }
                                                                                
                                                                             }
                                                                             >Edit</button>
                                                                    </div>
                                                                    <div className="icon-end-icons">
                                                                        <FaCheck style={{color:"#24c421"}}/>
                                                                        <FaEllipsisVertical/>
                                                                    </div>
                                                                    
                                                                </div>
                                                        </div>

                                                    
                                                </Link>
                                        ))
                                    }
                            </div> 
                    </div>
                </div>
            </div>

    </>

  );
}
export default Assignments;