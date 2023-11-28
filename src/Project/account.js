import * as client from "../Users/client";
import { useState, useEffect } from "react";
import { useNavigate, Link,  useParams } from "react-router-dom";


function Account() {

  const [account, setAccount] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };


  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };




  useEffect(() => {
    if (id) {
        findUserById(id);
      } else {
        fetchAccount();
      }
  
  }, []);

  
  return (
    <div className="w-50">
      <h1>Account</h1>

      {account && (
        <div>

            <div className="row">

                    <div className="col-2">
                        <label>password: </label>
                    </div>

                    <div className="col-2">
                        <input style={{marginBottom:10}} value={account.password}
                        onChange={(e) => setAccount({ ...account,
                        password: e.target.value })}/>
                    </div>

            </div>

            <div className="row">

                    <div className="col-2">
                        <label>firstName: </label>
                    </div>
                    <div className="col-2">
                        <input style={{marginBottom:10}} value={account.firstName}
                        onChange={(e) => setAccount({ ...account,
                        firstName: e.target.value })}/>
                    </div>


            </div>

            <div className="row">

                    <div className="col-2">
                        <label>lastName: </label>
                    </div>
                    <div className="col-2">
                        <input style={{marginBottom:10}} value={account.lastName}
                        onChange={(e) => setAccount({ ...account,
                        lastName: e.target.value })}/>
                    </div>


            </div>

            <div className="row">

                    <div className="col-2">
                        <label>dob: </label>
                    </div>
                    <div className="col-2">
                        <input style={{marginBottom:10}} value={account.dob}
                        onChange={(e) => setAccount({ ...account,
                        dob: e.target.value })}/>
                    </div>


            </div>

            <div className="row">

                    <div className="col-2">
                        <label>email: </label>
                    </div>
                    <div className="col-2">
                        <input style={{marginBottom:10}} value={account.email}
                        onChange={(e) => setAccount({ ...account,
                        email: e.target.value })}/>
                    </div>


            </div>

            <div className="row">

                    <div className="col-2">
                        <label>Role: </label>
                    </div>
                    <div className="col-2">
                        <select style={{marginBottom:10}} onChange={(e) => setAccount({ ...account,
                            role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>


            </div>
          
          <button style={{marginBottom: 10}} className="btn btn-primary" onClick={save} >Save</button>
          <Link style={{marginBottom: 10}} to="/project/admin/users" className="btn btn-warning w-100">Users</Link>
          <button style={{marginBottom: 10}} className="btn btn-danger" onClick={signout} >SignOut</button>
        

        </div>
      )}
    </div>
  );

}
export default Account;