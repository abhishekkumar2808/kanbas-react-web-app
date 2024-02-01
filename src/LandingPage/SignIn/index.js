
import "./index.css"
import * as client from "../../Users/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUserPlus, FiLogIn } from "react-icons/fi";
import { useAuth } from "../../AuthContext";
import AuthService from "../../AuthService";

function SignIn() {

    const { isSignedIn, setSignIn, isAdmin, setAdmin } = useAuth();
    console.log('singedin in login page: ', isSignedIn)
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    
    const navigate = useNavigate();
  
    const signin = async () => {
      
      console.log("creds", JSON.stringify(credentials))
      const user = await client.signin(credentials);
      if(user){
        console.log("user: ", user)
        console.log("signin while signing in: ", isSignedIn)
        setSignIn(true);
        navigate("/Kanbas/Dashboard")
      }
      else{
        window.alert("Invalid credentials, please try again")
      }

      //navigate(`/project/account/${user._id}`);
    };

    return(
                <div className="card  shadow border-0">
                            <div className="card-header " style={{backgroundColor:"#F3E5DD"}}>
                                <h2 className="text-center ">Login</h2>
                            </div>
                            
                         
                            <form className="p-5">

                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">
                                            <b>Username</b>
                                        </label>
                                        <input type="text" className="form-control" id="username" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="password" className="form-label">
                                            <b>Password</b>
                                        </label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
                                    </div>
                                    <div className="text-center mb-2">
                                        <button className="btn btn-danger w-100"  
                                            onClick={(e) => {
                                                    e.preventDefault();
                                                    signin();
                                                }}>
                                        <span><FiLogIn style={{marginBottom:3, marginRight:4}}/>Login</span>
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary w-100"  onClick={() => {navigate("signup")}}>
                                            <span><FiUserPlus style={{marginBottom:3, marginRight:2}}/> Sign Up</span>
                                        </button>
                                    </div>

                            </form>

                </div>
    );
}

export default SignIn;