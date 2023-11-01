import ModuleList from "./ModuleList";
import {FaEllipsisVertical} from "react-icons/fa6"
import {FaRegCheckCircle} from "react-icons/fa"
import "./index.css"
import db from "../../Database";
import { useParams } from "react-router-dom";



function Modules({tempCourses}) {

  const { id } = useParams();
  const chosenCourse = tempCourses.find((course) => course._id === id);
  const courseNumber = chosenCourse.number;
  const modules = db.modules;
  const courseModule = modules.filter((module) => module.course === courseNumber);

  console.log("courses in Modules: "+JSON.stringify(tempCourses))
  return (
    <>
        <div className="option-bar" style={{marginBottom:20}}>
            
                                            <button class="btn btn-light text-nowrap"  >Collapse All</button>
                                            <button class="btn btn-light text-nowrap"  >View Progress</button>
                                            <button class="btn btn-light text-nowrap"  ><FaRegCheckCircle style={{color:"#24c421"}}/> Publish All</button>
                                            <button class="btn btn-danger text-nowrap"  >+ Module</button>
                                            <button class="btn btn-light text-nowrap"  ><FaEllipsisVertical/></button>
                                                
            
        </div>
        
     
        
        <div className={(courseModule.length === 0)? "d-flex":"" } style={{paddingBottom:10,  justifyContent:(courseModule.length === 0)? "center":""}}>
            
            <ModuleList courses={tempCourses} />
        </div>
      
    </>
  );
}
export default Modules;