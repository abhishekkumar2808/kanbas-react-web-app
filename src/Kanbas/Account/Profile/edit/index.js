import "./index.css"
import { Link } from "react-router-dom";
import {FaPencilAlt, FaUserCircle} from "react-icons/fa"

function Edit() {
    

    return (
    
    
    <div className="row">
        <div class="col-10" style={{paddingRight:0}}>

            <form class="edit-profile-form row">
                <div class="col-12">
                    <FaUserCircle style={{fontSize:150}}/>
                </div>
                <div class="col-12">
                    <label for="inputName" class="form-label">Name:<span class="mandatory-star">*</span></label>
                    <input type="text" class="form-control" id="inputName"/>
                </div>

                <div class="col-12">
                    <label for="pronouns" class="form-label">Pronouns:</label>
                    <div class="dropdown">
                        <button style={{border: "1px solid grey;"}} class="btn btn-light dropdown-toggle" type="button" id="pronouns" data-bs-toggle="dropdown" aria-expanded="false">
                        None
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="pronouns">
                        <li><a classNmae="dropdown-item" >He / Him / His</a></li>
                        <li><a className="dropdown-item" >She / Her / Hers</a></li>
                        <li><a className="dropdown-item" >They /them / Theirs</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12">
                    <label for="title" class="form-label">Title:</label>
                    <input type="text" class="form-control" id="title"></input>
                </div>
                
            
                <div class="col-12">
                    <h3>Contact</h3>
                    <p>No registered services, you can add some on the settings page.</p>
                </div>

                <div class="col-12">
                    
                    
                    <label for="biography" class="form-label"><h3>Biography</h3></label>
                    <textarea class="form-control" id="biography" rows="3">Faculty, Software Engineer, AI,space, and renewables enthusiast.</textarea>
                </div>

                <div class="col-12">
                    <h3>Links</h3>
                    <div class="row">
                        <div class="col headings">
                            <h5>Title</h5>
                        </div>
                        <div class="col headings">
                            <h5>URL</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" id="inputName" value="YouTube"/>
                            {/* <!-- <span><i class="fa fa-arrow-right"></i></span> --> */}
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" id="inputName" value="https://www.youtube.com"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <a className="btn btn-light text-nowrap"  role="button" style={{marginTop: 10}}> Add another link</a>
                        </div>
                        <div class="col">
                            
                        </div>
                    </div>


                </div>
                
                <hr/>
                <div class="flex-container" style={{padding:0}}>
                    
                    <Link to="/Kanbas/Account/Profile/" class="btn btn-light text-nowrap" style={{marginLeft: 10}}  href="index.html" role="button">Cancel</Link>
                    <Link to="/Kanbas/Account/Profile/" class="btn btn-danger text-nowrap" style={{marginLeft: 10}} href="index.html" role="button">Save Profile</Link>  
                </div>


            </form>
        </div>
        <div class="col-2" style={{paddingRight: 0}}>
            <Link to="/Kanbas/Account/Profile/">
            <button class="btn btn-primary text-nowrap"  href="" ><FaPencilAlt style={{marginRight:8}}/>Cancel Editing</button>
            </Link>
        </div>

    </div>
    

    );

}

export default Edit;