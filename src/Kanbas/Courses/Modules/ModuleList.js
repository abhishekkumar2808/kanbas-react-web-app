import React, { useEffect, useState } from "react";
import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6"
import {FaCheck} from "react-icons/fa"
import FormModule from "./FormModule";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteModule,
  setModule,
  setModules
} from "./modulesReducer";
import { findModulesForCourse } from "./client";
import * as client from "./client";



function ModuleList({course, showModal, setShowModal}) {


  const dispatch = useDispatch();

  useEffect(() => {
    findModulesForCourse(course.number)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [course.number]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const deleteModuleHandler = (modID) => {
    client.deleteModule(modID).then((status) => {
      dispatch(deleteModule(modID));
    });

  };

  const courseModules = modules;

  const [editModal, setEditModal] = useState(false);

  if(courseModules.length) {
    return (
      <>
        {
          <>
         {showModal && <FormModule showModal={showModal} setShowModal={setShowModal} module={module} setModule={setModule} courseNumber={course.number} type="Add"/>}
          {editModal && <FormModule showModal={editModal} setShowModal={setEditModal} module={module} setModule={setModule} courseNumber={course.number} type="Edit"/>}
          </>
          

        }

        <div className="list-group">
          {
            

                    courseModules.map((mod, index) => (
                        <div key={mod._id} className="modules-list-item" style={{marginBottom:35, borderRadius:6}} >
                            <div className="module-name" >
                                <div className="mod">
                                  
                                  <h3>{mod.name}</h3>
                                </div>
                                <div className="module-name-icons-buttons">
                                  <div style={{marginRight:10, margin:10}}>
                                    <button className="btn btn-danger" onClick={() => deleteModuleHandler(mod._id)} style={{width:"70px"}}>Delete</button>
                                    <button className="btn btn-primary" 
                                    onClick={() =>{
                                        
                                        dispatch(setModule(mod))
                                        setEditModal(!editModal)
                                      }
                                      
                                      } style={{width:"70px"}}>Edit</button>
                                  </div>
                                
                                  <FaCheck style={{color:"#24c421"}}/>
                                  <FaEllipsisVertical/>
                                </div>
                                
                            </div>
                            <div className="module-desc" style={{padding:6}}>
                                <p>{mod.description}</p>
                            </div>

                        </div>
            ))
          }
        </div>
      </>

    );
  }
  else {
    return (
      <>
        {
            showModal && <FormModule showModal={showModal} setShowModal={setShowModal} module={module} setModule={setModule} courseNumber={course.number} type="Add"/>
        }
        <div className="error-div" style={{ border: '5px solid #000', color:"red", display: 'inline-block'}}>
          <h2 style={{margin:5}}>NO DATA AVAILABLE</h2>
      </div>
      </>

    );
  }

}
export default ModuleList;
