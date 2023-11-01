import React from 'react';
import "./index.css"
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, courses }) => {
  const offCanvasClass = isOpen ? 'show' : '';

  return (
    <div  className={`offcanvas offcanvas-start ${offCanvasClass}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width: 300}}>
      <div className="offcanvas-header">
        <h3 id="offcanvasExampleLabel">Courses</h3>
        <button type="button" className="btn-close text-reset" onClick={onClose}></button>
      </div>
      <hr style={{margin:0}}/>
      <div className="offcanvas-body">
        <h4>Published Courses</h4>
        <div className='list-group sidebar-list'>
         
            {
              courses.map(course => {
                
                return(
                  <div>
                          <Link 
                            className='sidebar-link'
                            to={`Courses/${course._id}/Home`}
                            onClick={() => onClose()}>
                              <div className='sidebar-item'>
                                <h5>{course.number} {course.name}</h5>
                              </div>
                          </Link>

                  </div>
                      )
                
              })
            }
          

        </div>

        
      </div>
    </div>
  );
};

export default Sidebar;