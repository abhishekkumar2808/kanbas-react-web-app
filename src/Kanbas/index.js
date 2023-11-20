import KanbasNavigation from "./KanbasNavigation.js";
import {Routes, Route, Navigate} from "react-router";
import Dashboard from "./Dashboard"
import Courses from "./Courses/index.js";
import Account from "./Account/index.js";
import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import { Provider } from "react-redux";
import store from "./store/index.js";
import axios from "axios";

function Kanbas() {

  

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {

    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log("kanbas coursees props: "+ courses)

  return (
    <Provider store={store}>
          <div className="d-flex">
              <div className="col-1" style={{position: "fixed"}}>
                <KanbasNavigation toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
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
    </Provider>

  );
}
export default Kanbas;
