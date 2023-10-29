
import { useParams, Link} from "react-router-dom";
import { useState } from "react";
import {Routes, Route, Navigate} from "react-router";
import {FaBars} from "react-icons/fa"
import AccountNavigation from "./AccountNavigation";
import Profile from "./Profile";
import Edit from "./Profile/edit";


function Account() {
  const { id } = useParams();
  console.log("account: "+id)
  const [navItem, setNavItem] = useState("Profile");

  return (

    <div>


            <div class="menu-name">

                  <div class="breadcrumb-container">
                      <FaBars style={{fontSize:25, marginRight:15}}/>
                      <h2 style={{margin:0}}>Abhishek kumar's Profile</h2>
                  </div>

                  
             </div>

             <hr/>

            <div className="row">
                  <div className="col-2">
                    <AccountNavigation navItem={navItem} setNavItem={setNavItem}/>
                  </div>

                  <div className="col-10">
                      
                      
                      <div
                        className="overflow-y-scroll bottom-0 end-0"
                        style={{
                          left: "320px",
                          top: "50px",
                        }}
                      >
                            <Routes>
                              <Route path="/"        element={<Navigate to="Profile" />}></Route>
                              <Route path="/Profile" element={<Profile/>} />
                              <Route path="/Files" element={<h1>Files</h1>}/>
                              <Route path="/Profile/Edit/" element={<Edit />}/>
                            </Routes>
                      </div>
                  </div>

            </div>



      </div>



  );
}
export default Account;