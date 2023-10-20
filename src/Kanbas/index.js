import KanbasNavigation from "./KanbasNavigation.js";
import {Routes, Route, Navigate} from "react-router";
import Dashboard from "./Dashboard"
import Courses from "./Courses/index.js";
import Modules from "./Courses/Modules/index.js";

function Kanbas() {


  return (
    <div className="d-flex">
          <div className="col-1" style={{position: "fixed"}}>
            <KanbasNavigation/>
          </div>
          
          <div className="col-11 container-fluid" style={{marginLeft: "90px", marginBottom:"10px"}}>
            
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:id/*" element={<Courses/>} />
            </Routes>



          </div>
      
      
    </div>
  );
}
export default Kanbas;
