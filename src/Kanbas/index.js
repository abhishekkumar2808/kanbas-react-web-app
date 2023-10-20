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
          
          <div className="col-11 container-fluid" style={{marginLeft: "110px", marginBottom:"10px"}}>
            
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:id/*" element={<Courses/>} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
              <Route path="History" element={<h1>History</h1>} />
              <Route path="Studio" element={<h1>Studio</h1>} />
              <Route path="Commons" element={<h1>Commons</h1>} />
              <Route path="Help" element={<h1>Help</h1>} />
            </Routes>



          </div>
      
      
    </div>
  );
}
export default Kanbas;
