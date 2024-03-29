import { Link, useLocation } from "react-router-dom";


function Nav() {

    const { pathname } = useLocation();

    return(

        <div className="list-group">
            <Link to="/project/signin" className={`list-group-item ${pathname.includes("signin")  && "active"}`}>Sign In</Link>
            <Link to="/project/signup" className={`list-group-item ${pathname.includes("signup")  && "active"}`}>Sign Up</Link>
            <Link to="/project/account" className={`list-group-item ${pathname.includes("account")  && "active"}`}>Account</Link>

        </div>
    );
}

export default Nav;