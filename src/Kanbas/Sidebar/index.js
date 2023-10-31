import React from 'react';
import "./index.css"

const Sidebar = ({ isOpen, onClose }) => {
  const offCanvasClass = isOpen ? 'show' : '';

  return (
    <div  className={`offcanvas offcanvas-start ${offCanvasClass}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >
      <div className="offcanvas-header">
        <h3 id="offcanvasExampleLabel">Courses</h3>
        <button type="button" className="btn-close text-reset" onClick={onClose}></button>
      </div>
      <hr style={{margin:0}}/>
      <div className="offcanvas-body">
        <h5>Published Courses</h5>
        
      </div>
    </div>
  );
};

export default Sidebar;