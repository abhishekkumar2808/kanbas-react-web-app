
import { Link, useLocation  } from "react-router-dom";
import "./index.css"
import {FaEyeSlash} from "react-icons/fa6"

function CourseNavigation({navItem, setNavItem}) {
    const { pathname } = useLocation();

    const navbarItems =[ "Notifications",  "Profile", "Files", "Settings", "ePortfolios", "Shared Content", "The Hub", "Quickly Course Tools", "Global Announcements"]

console.log(pathname)

    return (
        <>
            
            <div class="wd-sidebar">
                <div class="list-group wd-profile-navigation">
                    {
                        navbarItems.map((item,index) => (
                            
                    
                                <Link
                                    to={`${item.split(' ').join('')}`}
                                    key={index}
                                    className= {`list-group-item ${pathname.includes(item.split(' ').join('')) && "active"}`} 
                                    onClick={() =>setNavItem("item")}
                                    >
                                    {item}
                                </Link>

                                
                                
                            
                            
                                
                        ))
                            
                    }
                 
                </div>
            </div>
        </>
    );
}


export default CourseNavigation