import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"


function ModuleList() {
  const { id } = useParams();

  const courseID = db.courses.find((course)=>(course._id === id))
  console.log("course number: "+courseID.number)

  const modules = db.modules;
  return (
    <div className="list-group">
      {
       
        modules.filter((module) => module.course === courseID.number)
                .map((module, index) => (
                <div key={index} className="modules-list-item" style={{marginBottom:35}}>
                    <div className="module-name" >
                        <h3>{module.name}</h3>
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
