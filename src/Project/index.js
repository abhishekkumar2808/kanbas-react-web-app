import Signin from "../Users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";


function Project() {

  return (
    <div className="container-fluid">

            <h1>Project</h1>

            <div className="row">

                <div className="col-2">
                    <Nav />
                </div>

                <div className="col-10">

                    <Routes>
                        <Route path="/" element={<Navigate to="/project/home" />} />
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                </div>

            </div>

    </div>

    

  );
}

export default Project;