import ModuleList from "./ModuleList";
import {FaEllipsisVertical} from "react-icons/fa6"
import {FaRegCheckCircle} from "react-icons/fa"
import "./index.css"



function Modules({tempCourses}) {
  
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
        
     
        
        <div style={{paddingBottom:10}}>
            
            <ModuleList courses={tempCourses} />
        </div>
      
    </>
  );
}
export default Modules;