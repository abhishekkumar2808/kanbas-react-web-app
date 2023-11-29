import React, { useState, useEffect } from "react";
import * as client from "../Users/client";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil }
  from "react-icons/bs";
import {Link } from "react-router-dom";

function UserTable() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => { fetchUsers(); }, []);

  const [user, setUser] = useState({ username: "", password: "", role: "USER" });

  const createUser = async () => {
    try {
      const newUser = await client.createUser({...user, "_id": new Date().getTime().toString()});
      setUsers([...users, newUser]);
    } catch (err) {
      console.log(err);
    }
  };

  const selectUser = async (usr) => {
    try {
   
      const u = await client.findUserById(usr._id);

      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
        <tr>
                <td>
                    <input style={{marginRight:5}} placeholder="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                    <input placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                </td>
                <td>
                    <input placeholder="first name" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                </td>
                <td>
                    <input placeholder="last name" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                </td>
                <td>
                    <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                </td>
                <td className="text-nowrap">
                    <Link><BsFillCheckCircleFill onClick={updateUser} className="me-2 text-success fs-1 text" /></Link>

                    <Link><BsPlusCircleFill className="me-2 fs-1 text" onClick={createUser}/></Link>
                </td>
          </tr>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>

          </tr>

        </thead>
        <tbody>
          {users.map((usr) => (
            <tr key={usr._id}>
              <td><Link to={`/project/account/${usr._id}`}>{usr.username}</Link></td>
              <td>{usr.firstName}</td>
              <td>{usr.lastName}</td>
              <td className="text-nowrap">
                    <button className="btn btn-danger me-2" onClick={() => deleteUser(usr)}>
                    <BsTrash3Fill  />
                    </button>
                    <button className="btn btn-warning me-2" onClick={() => { selectUser(usr)}}>
                    <BsPencil  />
                    </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;