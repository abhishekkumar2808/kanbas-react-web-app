import Modules from "../Modules";


function Home() {
  return (
    <div className="row">
        <div className="col-9">
            <Modules />
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
                                    <a  class="list-group-item list-group-item-action " aria-current="true">
                                      Import Existing Content
                                    </a>
                                    <a  class="list-group-item list-group-item-action">Import from Commons</a>
                                    <a  class="list-group-item list-group-item-action">Choose Home Page</a>
                                    <a  class="list-group-item list-group-item-action">View Course Stream</a>
                                    <a  class="list-group-item list-group-item-action " tabindex="-1" aria-disabled="true">View Announcements</a>
                                    <a  class="list-group-item list-group-item-action">New Analytics</a>
                                    <a  class="list-group-item list-group-item-action">View Course Notification</a>
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
                                            <p><i class="fa-solid fa-calendar"></i> Calendar</p>
                                        </div>
                                    </div>

                                    <hr style={{margin:0}}/>
                                    
                                    <div class="coming-content">
                                        <ul class="list-group">
                                            <li class="list-group-item"><i  class="fa-solid fa-calendar"></i>Web Lecture</li>
                                            <li class="list-group-item"><i class="fa-solid fa-calendar"></i>Web Assignment</li>
                                            <li class="list-group-item"><i class="fa-solid fa-calendar"></i>Web Lecture 2</li>
                                            <li class="list-group-item"><i class="fa-solid fa-calendar"></i>Web Quiz</li>
                                            <li class="list-group-item"><i class="fa-solid fa-calendar"></i>Web Project</li>
                                            <li class="list-group-item"><i class="fa-solid fa-calendar"></i>Web Quiz 2</li>
                                          </ul>
                                    </div>


                                </div>

                                




                            </div>
        </div>
      
      
      
    </div>
  );
}
export default Home;