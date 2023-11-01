
const FormModule = ({showModal, setShowModal, module, setModule, modules, setModules, courseNumber, type}) => {



  function resetModuleData() {

    const t= {

      name: "New Module",
      description: "New Description",
      course: courseNumber,
    }
    setModule(t);

  }

  const addModule = () => {
    setModules([
      ...modules,
      { ...module, _id: new Date().getTime().toString() },
        
    ]);

    setShowModal(!showModal);
    resetModuleData();

  
    
  };

  const editModule = () => {

    setShowModal(false);
    resetModuleData();
    setModules(
        modules.map((m) => {
          if (m._id === module._id) {
            return module;
          } else {
            return m;
          }
        })
      );
  }









    return(
        <div className={`modal ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{`${type} a Module`}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {resetModuleData(); setShowModal(!showModal)}}></button>
                  </div>
                  <div className="modal-body">
                      <form>
                        <div className="form-group">
                            <label for="module-name" className="col-form-label">Name:</label>
                            <input type="text" className="form-control" id="module-name" placeholder='New Module Name' value={module.name} onChange={(e) => setModule({ ...module, name: e.target.value }) }/>
                        </div>
                        <div className="form-group">
                            <label for="module-desc" className="col-form-label">Number:</label>
                            <input type="text" className="form-control" id="moudle-desc" placeholder='New Module Description' value={module.description} onChange={(e) => setModule({ ...module, description: e.target.value }) }/>
                        </div>

                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {resetModuleData(); setShowModal(!showModal)}} >Close</button>
                    <button type="button" className="btn btn-primary" 
                    onClick={(type === 'add')? addModule : editModule} >{type}</button>
                  </div>
                </div>
              </div>
        </div>

    );
}

export default FormModule;