import { addModule, updateModule } from "./modulesReducer";
import { useDispatch } from "react-redux";

import { createModule } from "./client";
import * as client from "./client";


const FormModule = ({showModal, setShowModal, module, setModule, courseNumber, type}) => {

  const dispatch = useDispatch();

  function resetModuleData() {

    const t= {

      name: "New Module",
      description: "New Description",
      course: courseNumber,
    }
    dispatch(setModule(t));
    ;
  }

  const addMod = () => {
    setShowModal(!showModal);

    createModule(courseNumber, module).then((mod) => {
      dispatch(addModule(mod));
    });

    resetModuleData();
  };

  const editMod = async () => {

    setShowModal(false);
    await client.updateModule(module).then((stat) => {dispatch(updateModule(module))});
    resetModuleData()
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
                            <input type="text" className="form-control" id="module-name" placeholder='New Module Name' value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value })) }/>
                        </div>
                        <div className="form-group">
                            <label for="module-desc" className="col-form-label">Description:</label>
                            <input type="text" className="form-control" id="moudle-desc" placeholder='New Module Description' value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value })) }/>
                        </div>

                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{width:"14%"}}
                    onClick={() => 
                        { resetModuleData(); 
                          setShowModal(!showModal)
                        }
                    } >Close</button>
                    <button type="button" className="btn btn-primary" style={{width:"14%"}}
                    onClick={(type === 'Add')? addMod : editMod} >{type}</button>
                  </div>
                </div>
              </div>
        </div>

    );
}

export default FormModule;