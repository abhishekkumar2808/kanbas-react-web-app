import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6"
import {FaCheck, FaPlus} from "react-icons/fa"


function ModuleList({courses}) {

  const { id } = useParams();

  const chosenCourse = courses.find((course) => course._id === id);
  const courseNumber = chosenCourse.number;


  const modules = db.modules;
  return (
    <div className="list-group">
      {
       
        modules.filter((module) => module.course === courseNumber)
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
