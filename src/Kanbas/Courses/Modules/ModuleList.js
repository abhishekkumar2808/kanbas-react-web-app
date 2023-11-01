import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6"
import {FaCheck} from "react-icons/fa"
import FormModule from "./FormModule";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteModule,
  setModule,
} from "./modulesReducer";



function ModuleList({courses, showModal, setShowModal}) {

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  console.log("list of modules: "+ JSON.stringify(modules));

  const { id } = useParams();

  const chosenCourse = courses.find((course) => course._id === id);
  const courseNumber = chosenCourse.number;


  
  // const [modules, setModules] = useState(db.modules);
  const courseModules = modules.filter((module) => module.course === courseNumber);



  // const [module, setModule] = useState({

  //   name: "New Module",
  //   description: "New Description",
  //   course: courseNumber,
  // });





  // const deleteModule =(id) =>{

  //     setModules( modules.filter( (mod) => mod._id!== id) )
  // }

  const [editModal, setEditModal] = useState(false);

  if(courseModules.length) {
    return (
      <>
        {
          <>
         {showModal && <FormModule showModal={showModal} setShowModal={setShowModal} module={module} setModule={setModule} courseNumber={courseNumber} type="add"/>}
          {editModal && <FormModule showModal={editModal} setShowModal={setEditModal} module={module} setModule={setModule} courseNumber={courseNumber} type="edit"/>}
          </>
          

        }

        <div className="list-group">
          {
            

                                      courseModules.map((mod, index) => (
                                          <div key={mod._id} className="modules-list-item" style={{marginBottom:35}}>
                                              <div className="module-name" >
                                                  <div className="mod">
                                                    
                                                    <h3>{mod.name}</h3>
                                                  </div>
                                                  <div className="module-name-icons-buttons">
                                                    <div style={{marginRight:10, margin:10}}>
                                                    <button className="btn btn-danger" onClick={() => dispatch(deleteModule(mod._id))} style={{width:"70px"}}>Delete</button>
                                                    <button className="btn btn-warning" 
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
            showModal && <FormModule showModal={showModal} setShowModal={setShowModal} module={module} setModule={setModule} courseNumber={courseNumber} type="add"/>
        }
        <div className="error-div" style={{ border: '5px solid #000', color:"red", display: 'inline-block'}}>
          <h2 style={{margin:5}}>NO DATA AVAILABLE</h2>
      </div>
      </>

    );
  }

}
export default ModuleList;
