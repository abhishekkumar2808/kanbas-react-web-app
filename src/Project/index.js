import Signin from "../Users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";

import Home from "./home";
import Account from "./account";
import Login from "./login";
import Signup from "./signup";
import UserTable from "./table";
 


function Project() {

  return (
    <div className="container-fluid">

            <h1>Project</h1>
            <hr/>

            <div className="row">

                <div className="col-2">
                    <Nav />
                </div>

                <div className="col-10">

                    <Routes>
                        <Route path="/" element={<Navigate to="/project/home" />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/account" element={<Account/>} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/admin/users" element={<UserTable/>} />
                    </Routes>
                </div>

            </div>

    </div>

    

  );
}

export default Project;