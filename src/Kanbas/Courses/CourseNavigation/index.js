
import { Link, useLocation  } from "react-router-dom";

import {FaEyeSlash} from "react-icons/fa6"

function CourseNavigation({navItem, setNavItem}) {
    const { pathname } = useLocation();

    const navbarItems =[ "Home",  "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panapto Video", "Discussions", "Anouncements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings",
   
]
console.log(pathname)

    return (
        <>
            
            <div class="wd-sidebar">
                <div class="list-group wd-profile-navigation">
                    {
                        navbarItems.map((item,index) => (
                            <div className="flex-container">
                    
                                <Link
                                    to={`${item.split(' ').join('')}`}
                                    key={index}
                                    className= {`list-group-item ${pathname.includes(item.split(' ').join('')) && "active"}`} 
                                    onClick={()=>(setNavItem(item))}
                                    >
                                    {item}
                                </Link>

                                <div>
                                    {(index > (navbarItems.length-6)) && <FaEyeSlash style={{color:"black"}}/>} 
                                </div>
                                
                            </div>
                            
                                
                        ))
                            
                    }
                 
                </div>
            </div>
        </>
    );
}


export default CourseNavigation