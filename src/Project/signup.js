import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../Users/client";


function Signup() {

  const [error, setError] = useState("");

  const [credentials, setCredentials] = useState({
    username: "", password: "" });

  const navigate = useNavigate();

  const signup = async () => {
    try {
        console.log("before making api call: "+ JSON.stringify(credentials) );
      const user = await client.signup({...credentials, "_id": new Date().getTime().toString()});
      navigate(`/project/account/${user._id}`);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <div style={{color:"red"}}>{error}</div>}
      <input
        placeholder="username"
        style={{marginBottom:10}}
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
          <br/>
      <input
        placeholder="password"
        style={{marginBottom:10}}
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
          <br/>
      <button 
        className="btn btn-primary"
        onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;