import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signin() {

  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signin = async () => {
    
    console.log("creds", JSON.stringify(credentials))
    const user = await client.signin(credentials);
    navigate(`/project/account/${user._id}`);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input style={{marginBottom:10}} value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <br/>
      <input style={{marginBottom:10}} value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <br/>
      <button className="btn btn-primary" onClick={signin}> Signin </button>
    </div>
  );
}

export default Signin;