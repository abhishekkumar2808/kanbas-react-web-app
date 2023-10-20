
import db from "../Database";
import { useParams } from "react-router-dom";
import {FaFileImport, FaFileExport, FaGear} from "react-icons/fa6"
import {FaFilter} from "react-icons/fa"
import "./index.css"



function Grades() {
  const { id } = useParams();
  const courseNum = db.courses.find((course)=>(course._id===id))
  const assignments = db.assignments.filter((assignment) => assignment.course === courseNum.number);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseNum.number);
  return (
    <div>

        <div>
                <div class="top-header-container" style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
                                        <div>

                                        </div>
                                        <div class="icons">
                                            
                                            <button class="btn btn-light text-nowrap"  ><FaFileImport/> Import</button>
                                            <button class="btn btn-light text-nowrap"  ><FaFileExport/> Export</button>
                                            <button class="btn btn-light text-nowrap" ><FaGear/></button>
                                                
                                        </div>
                </div>
                <hr/>

                <div class="student-assignment">
                                <div class="row">
                                    <div class="col">
                                        <h4>Student Names</h4>
                                    </div>
                                    <div class="col">
                                        <h4>Assignment Names</h4>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" placeholder="Search Students" style={{width:"100%"}}/>
                                    </div>
                                    <div class="col">
                                        <input type="text" placeholder="Assignment Students" style={{width:"100%"}}/>
                                    </div>

                                </div>
                </div>

                <br/>

                <button class="btn btn-light text-nowrap"  ><FaFilter style={{marginRight:5}}/>Apply Filters</button>
                <br/>
                <br/>



        </div>
      
        
        
        
        
        <div className="table-responsive ">
                <table className="table border table-striped">
                    <thead className="border thead-dark">
                    <tr><th style={{textAlign:"center"}}>Student Name</th>
                        {assignments.map((assignment) => (<th style={{textAlign:"center"}} className="border">{assignment.title}</th>))}</tr>
                        
                    </thead>


                    <tbody>
                        {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr >
                            <td style={{textAlign:"center"}} className="table-border border">{user.firstName} {user.lastName}</td>
                            {assignments.map((assignment) => {
                                const grade = db.grades.find(
                                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                return (<td style={{textAlign:"center"}} className="border">{grade?.grade || ""}</td>);})}
                            </tr>);
                        })}
                    </tbody>
                </table>
        </div>
    
    
    
    
    
    
    
    
    </div>);
}
export default Grades;

