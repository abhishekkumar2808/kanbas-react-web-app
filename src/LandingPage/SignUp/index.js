import React, { useState } from "react";
import * as client from "../../Users/client";
import { useNavigate } from "react-router-dom";
import { FiUserPlus, FiLogIn } from "react-icons/fi";


function SignUp() {

  console.log("hello")

  const [error, setError] = useState("");

  const [credentials, setCredentials] = useState({
    username: "", password: "" });

  const navigate = useNavigate();

  const signup = async () => {
    try {
        console.log("before making api call: "+ JSON.stringify(credentials) );
      const user = await client.signup({...credentials, "_id": new Date().getTime().toString()});
      navigate("/Kanbas/Dashboard")
    } catch (err) {
      //setError(err.response.data.message);
      window.alert(err.response.data.message)
    }
  };

  return (
    


    <div className="card  shadow border-0">
            <div className="card-header " style={{backgroundColor:"#F3E5DD"}}>
                                <h2 className="text-center ">Sign Up</h2>
            </div>
          
          <form className="p-5" >
          {error && <div className="d-flex align-items-center justify-content-center" style={{color:"red"}}>{error}</div>}

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
                      <button className="btn btn-primary w-100"  onClick={(e) => {e.preventDefault(); signup()}}>
                          <span><FiUserPlus style={{marginBottom:3, marginRight:2}}/> Sign Up</span>
                      </button>
                  </div>
                  <div className="text-center ">
                      <button className="btn btn-danger w-100"  
                          onClick={(e) => {
                                  navigate("/")
                              }}>
                      <span><FiLogIn style={{marginBottom:3, marginRight:4}}/>Login</span>
                      </button>
                  </div>

          </form>


</div>





  );
}
export default SignUp;