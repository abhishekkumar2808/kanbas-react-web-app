
import {FaPencilAlt, FaUserCircle, FaLink} from "react-icons/fa"
import "./index.css"
import { Link } from "react-router-dom";

function Profile() {
    
    return (
        <>
            <div className="row">
                <div className="col-10">
                    <ul class="list-group">
                                <li className="list-group-item" style={{border:"none"}}><FaUserCircle style={{fontSize:150}}/></li>
                                <li className="list-group-item" style={{border:"none"}}><h2>Abhishek Kumar</h2></li>
                                <li className="list-group-item" style={{border:"none"}}><h3>Contact</h3><p>No resigned services, you can add some on the settings page.</p></li>
                                <li className="list-group-item" style={{border:"none"}}><h3>Biography</h3><p>Faculty, Software Engineer, AI, Space, and renewables enthusiast.</p></li>
                                <li className="list-group-item" style={{border:"none"}}><h3>Links</h3><span><FaLink style={{marginRight:5}}/><a href="https://www.youtube.com">youtube<i></i></a></span></li>
                    </ul>
                </div>
                <div className="col-2">
                <Link to="Edit"><button className="btn btn-primary text-nowrap float-end" ><FaPencilAlt style={{marginRight:8}}/>Edit Profile</button></Link>
                </div>

            </div>
        </>
    );
}

export default Profile;