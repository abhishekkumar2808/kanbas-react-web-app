import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6"
import {FaCheck, FaPlus} from "react-icons/fa"


function ModuleList({courses}) {
  const { id } = useParams();
  console.log("courses in ML: "+JSON.stringify(courses))
  //const courseID = course.number;
  // console.log("course number: "+courseID.number)

  const modules = db.modules;
  return (
    <div className="list-group">
      {
       
        modules.filter((module) => module.course === 111)
                .map((module, index) => (
                <div key={index} className="modules-list-item" style={{marginBottom:35}}>
                    <div className="module-name" >
                        <div className="mod">
                          
                          <h3>{module.name}</h3>
                        </div>
                        <div>
                        <FaCheck style={{color:"#24c421"}}/>
                        <FaEllipsisVertical/>
                        </div>
                        
                    </div>
                    <div className="module-desc" style={{padding:6}}>
                        <p>{module.description}</p>
                    </div>
                    
                    
                </div>
      ))
      }
    </div>
  );
}
export default ModuleList;
