import { Link, useLocation } from "react-router-dom";
import "./index.css"
import {FaUser, FaGaugeHigh, FaBook, FaCalendarDays, FaEnvelopeOpenText, FaClock, FaTv, FaArrowRight, } from "react-icons/fa6"
import {FaQuestionCircle} from "react-icons/fa"



function KanbasNavigation({toggleSidebar}) {

  const { pathname } = useLocation();




const navItems = [
    {
        "name": "Account",
        "icon-url": FaUser,
    },
    {
        "name": "Dashboard",
        "icon-url": FaGaugeHigh,
    },
    {
        "name": "Courses",
        "icon-url": FaBook,
    },
    {
        "name": "Calendar",
        "icon-url": FaCalendarDays,
    },
    {
        "name": "Inbox",
        "icon-url": FaClock,
    },
    {
        "name": "History",
        "icon-url": FaEnvelopeOpenText,
    },
    {
        "name": "Studio",
        "icon-url": FaTv,
    },
    {
        "name": "Commons",
        "icon-url": FaArrowRight,
    },
    
    {
        "name": "Help",
        "icon-url": FaQuestionCircle,
    },
]
  return (

        <div className="sidebar" >


        
            <Link 
                key={"logo"}
                to={"/Kanbas/Dashboard"}
                className= "sidebar-item">
                <img src={process.env.PUBLIC_URL + '/images/NEU.png'} alt="NEU Logo" width="80px" height="80px"/>
            </Link>
            {
                navItems.map((item, index) => 
                    {

                        
                        let Url = item["icon-url"];
                        
                        return(
                                <Link
                                key={index}
                                to={`/Kanbas/${item.name}`}
                                className={`sidebar-item ${pathname.includes(item.name) && "active"}`}
                                onClick={(item.name === "Courses") && ((event) => { console.log("item: "+ item); toggleSidebar();})}>
                                <div>
                                    <Url style={{color:"red", fontSize: 27}}/>
                                </div>
                                
                                {item.name}
                                </Link>
                        

                                
                            )
                    }
                )
            }
        </div>
              
            

    



  );
}
export default KanbasNavigation; 