import ModuleList from "./ModuleList";
import {FaEllipsisVertical} from "react-icons/fa6"
import {FaRegCheckCircle} from "react-icons/fa"
import "./index.css"
import db from "../../Database";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";





function Modules({tempCourses}) {

  const { id } = useParams();
  const chosenCourse = tempCourses.find((course) => course._id === id);
  const courseNumber = chosenCourse.number;
  const modules = useSelector((state) => state.modulesReducer.modules);
  const courseModule = modules.filter((module) => module.course === courseNumber);

  const [showModal, setShowModal] = useState(false);


  return (
    <>



        <div className="option-bar" style={{marginBottom:20}}>
            
                                            <button className="btn btn-light text-nowrap"  >Collapse All</button>
                                            <button className="btn btn-light text-nowrap"  >View Progress</button>
                                            <button className="btn btn-light text-nowrap"  ><FaRegCheckCircle style={{color:"#24c421"}}/> Publish All</button>
                                            <button className="btn btn-primary text-nowrap" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setShowModal(!showModal)} >+ Module</button>
                                            <button className="btn btn-light text-nowrap"  ><FaEllipsisVertical/></button>
                                                
            
        </div>


        
     
        
        <div className={(courseModule.length === 0)? "d-flex":"" } style={{paddingBottom:10,  justifyContent:(courseModule.length === 0)? "center":""}}>
            
            <ModuleList courses={tempCourses} showModal={showModal} setShowModal={setShowModal}/>
        </div>
      
    </>
  );
}
export default Modules;