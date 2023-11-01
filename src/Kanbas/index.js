import KanbasNavigation from "./KanbasNavigation.js";
import {Routes, Route, Navigate} from "react-router";
import Dashboard from "./Dashboard"
import Courses from "./Courses/index.js";
import Account from "./Account/index.js";
import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import db from "./Database";

function Kanbas() {

  

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [courses, setCourses] = useState(db.courses);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex">
          <div className="col-1" style={{position: "fixed"}}>
            <KanbasNavigation toggleSidebar={toggleSidebar} />
          </div>
          
          <div className="col-11 container-fluid" style={{marginLeft: "110px", marginBottom:"10px"}}>

            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} courses={courses}/>
            
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account/*" element={<Account/>} />
              <Route path="/Dashboard" element={<Dashboard courses={courses} setCourses={setCourses}/>} />
              <Route path="/Courses/:id/*" element={<Courses courses={courses} setCourses={setCourses}/>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
              <Route path="/History" element={<h1>History</h1>} />
              <Route path="/Studio" element={<h1>Studio</h1>} />
              <Route path="/Commons" element={<h1>Commons</h1>} />
              <Route path="/Help" element={<h1>Help</h1>} />
            </Routes>



          </div>
      
      
    </div>
  );
}
export default Kanbas;
