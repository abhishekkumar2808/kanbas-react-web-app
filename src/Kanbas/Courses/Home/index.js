import Modules from "../Modules";
import {FaCalendarAlt} from "react-icons/fa"


function Home({tempCourses}) {

  const rightBarItems = ["Import Existing Content","Import from Commons", "Choose Home Page", "View Course Stream", "View Announcements", "New Analytics", "View Course Notification"]
  const toDoItems = ["Web Lecture", "Web Assignment", "Web Lecture 2", "Web Quiz", "Web Project", "Web Quiz 2"]
  return (
    <div className="row">
        <div className="col-9">
            <Modules  tempCourses={tempCourses}/>
        </div>
        <div className="col-3">
        <div class="container">
                                <p>Course Status</p>

                                <div class="row" style={{marginBottom:10}}>
                                    <div class="col">
                                        <a style={{width:"100%"}} class="btn btn-light text-nowrap"  href="index.html" role="button"><i class="fa-solid fa-ban"></i> Unpublish</a>
                                    </div>
                                    <div class="col">
                                        <a style={{width:"100%"}} class="btn btn-light text-nowrap"  href="index.html" role="button"><i class="fa-solid fa-check" style={{color:"#24c421"}}></i> Published</a>
                                    </div>
                                </div>

                                <div class="list-group course-options">
                                    {
                                        rightBarItems.map(
                                            (item) =>
                                                <button 
                                                    key={item}
                                                    className="list-group-item list-group-item-action">{item}</button>
                                            
                                        )
                                    }

                                </div>

                                <div class="todo">
                                    <p><b>To Do</b></p>
                                    <hr/>
                                    <div style={{paddingLeft:15}}>
                                        <p>Grade A1 - ENV + HTML</p>
                                    </div>
                                </div>

                                <div class="coming-up">
                                    <div class="coming-header">
                                        <div>
                                            <span><b>To Do</b></span>
                                        </div>
                                        <div>
                                            <p><FaCalendarAlt style={{marginRight:8}}/>Calendar</p>
                                        </div>
                                    </div>

                                    <hr style={{margin:0}}/>
                                    
                                    <div class="coming-content">
                                        <ul class="list-group">
                                        {
                                            toDoItems.map(
                                                item => 
                                                <li 
                                                    key={item}
                                                    className="list-group-item"><FaCalendarAlt style={{marginRight:8}}/>{item}</li>
                                            )
                                        }
                                          </ul>
                                    </div>


                                </div>

                                




                            </div>
        </div>
      
      
      
    </div>
  );
}
export default Home;