import "./index.css"
import * as client from "../Users/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUserPlus, FiLogIn } from "react-icons/fi";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {Routes, Route} from "react-router";
import { Link } from "react-router-dom";





function LandingPage() {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ username: "", password: "" });


  const signin = async () => {
    
    console.log("creds", JSON.stringify(credentials))
    const user = await client.signin(credentials);
    console.log("user: ", user)
    navigate("/Kanbas/Dashboard")
    //navigate(`/project/account/${user._id}`);
  };


    return(

        <>
            <div className=" d-flex justify-content-center align-items-center vh-100 gradient-bg" >

                <Routes>
                    <Route path="/"         element={<SignIn />}/>
                    <Route path="/signup"   element={<SignUp />} />
                </Routes>

            </div>
            <div className="footer"></div>
        </>
    );
}

export default LandingPage