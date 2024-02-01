import React, { useEffect, useState } from "react";
import db from "../Database";
import { useParams } from "react-router-dom";
import {FaFileImport, FaFileExport, FaGear} from "react-icons/fa6"
import {FaFilter} from "react-icons/fa"
import "./index.css"
import { main } from "@popperjs/core";



function Grades() {

  const { id } = useParams();
  const courseNum = db.courses.find((course)=>(course._id===id))
  const assignments = db.assignments.filter((assignment) => assignment.course === courseNum.number);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseNum.number);

  const [dispData, setDispData] = useState([])

  const [searchStudent, setSearchStudent] = useState("");
  const [searchAssignment, setSearchAssignment] = useState("");
  const [mainData, setMainData] = useState([])

  const [dispAssigment, setDispAssignment] = useState([...assignments])


  
  useEffect( ()=>{

    if(searchStudent === ""  && searchAssignment === "")
    {

        setDispAssignment([...assignments])
        setDispData([...mainData]);

    }
        
    else
    {
        let tempData = [];


        if(searchStudent !== "") {
        
            if(searchAssignment === "") {
                setDispAssignment([...assignments])
            }
             tempData = mainData.filter((a) => (a.fname + a.lname).toLowerCase().includes(searchStudent.toLowerCase()) )

            if(tempData.length){
                setDispData([...tempData])
            }
            else{
                setDispData([]);
            }

            // console.log("tempData after search student: "+ JSON.stringify(tempData))
        }

        if(searchAssignment !== ""){

            tempData = mainData;

            console.log("gettt")
            const searchAssignmentIndex = assignments.findIndex((assignment) => assignment.title.toLowerCase().includes(searchAssignment.toLowerCase()));
            console.log("index: "+ searchAssignmentIndex)
            if( searchAssignmentIndex > -1) {

                const temp = tempData.map((main) => {
                    return {
                        ...main,
                        "grades": [main.grades[searchAssignmentIndex]]
                    };
                });
                console.log("tmeppp: "+ JSON.stringify(temp))
                setDispAssignment([assignments[searchAssignmentIndex]]);
                setDispData([...temp])
            }
            // console.log("tempData after search assignment: "+ JSON.stringify(tempData))

        }




    }

}, [searchStudent, searchAssignment])

  useEffect( ()=> 
  {

    const tempData = enrollments.map((enrollment) => 
                            
    {

         const user = db.users.find((user) => user._id === enrollment.user);

         const grades = assignments.map((assignment) => {
            return (db.grades.find( (grade) => grade.student === enrollment.user && grade.assignment === assignment._id)); 
        
        })

         return ({
            "_id": user._id + enrollment._id,
            "fname": user.firstName,
            "lname": user.lastName,
            "grades": grades.map((grade) => grade.grade)

         })

    })

    // console.log("tempData: "+ JSON.stringify(tempData))

    setMainData([...tempData]);
    
    setDispData([...tempData]);     
    // console.log("mainData: "+ JSON.stringify(mainData))


  }, [])




    // console.log("mainData22: "+ JSON.stringify(dispData))
  
  return (
    
    <div>

        <div>
                <div className="top-header-container" style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
                                        <div>

                                        </div>
                                        <div className="icons">
                                            
                                            <button className="btn btn-light text-nowrap"  ><FaFileImport/> Import</button>
                                            <button className="btn btn-light text-nowrap"  ><FaFileExport/> Export</button>
                                            <button className="btn btn-light text-nowrap" ><FaGear/></button>
                                                
                                        </div>
                </div>
                <hr/>

                <div className="student-assignment">
                                <div className="row">
                                    <div className="col">
                                        <h4>Student Names</h4>
                                    </div>
                                    <div className="col">
                                        <h4>Assignment Names</h4>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" placeholder="Search Student" onChange={(e) => setSearchStudent(e.target.value) } style={{width:"100%"}}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" placeholder="Search Assignment" onChange={(e) => setSearchAssignment(e.target.value) } style={{width:"100%"}}/>
                                    </div>

                                </div>
                </div>

                <br/>

                <button className="btn btn-light text-nowrap"  ><FaFilter style={{marginRight:5}}/>Apply Filters</button>
                <br/>
                <br/>



        </div>
      
        
        
        
        
        <div className="table-responsive ">
                <table className="table border table-striped">
                    <thead className="border thead-dark">
                    <tr><th style={{textAlign:"center"}}>Student Name</th>
                        {dispAssigment.map((assignment) => (<th key={assignment._id} style={{textAlign:"center"}} className="border">{assignment.title}</th>))}</tr>
                        
                    </thead>


                    <tbody>

                        {
                            
                            dispData.map((data) => 
                            
                                { 

                                        return (

                                            <tr key={data._id}>
                                                <td style={{textAlign:"center"}} className="table-border border">{data.fname} {data.lname}</td>
                                                {
                                                    data.grades.map((grade, index) => {
                                                    return (<td key={index} style={{textAlign:"center"}} className="border">{grade || ""}</td>);})
                                                }
                                            </tr>);
                                    }
                        
                            )
                            
                        }

                    </tbody>
                </table>
                
        </div>
    
    
    
    
    
    
    
    
    </div>);
}
export default Grades;

