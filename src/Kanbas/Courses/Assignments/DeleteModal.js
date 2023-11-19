import { deleteAssignment, setAssignment} from "./assignmentsReducer";
import { useDispatch } from "react-redux";
import * as service from "./services"


function DeleteModal({showDeleteModal, setShowDeleteModal, assignment}) {

    const dispatch = useDispatch();
    console.log("element to be deleted: "+ JSON.stringify(assignment))
    

    console.log("inside delete modal: "+ showDeleteModal)

    return(
        <div className={`modal ${showDeleteModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showDeleteModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                            <div className="modal-header" style={{padding:0, paddingLeft:8}}>
                                <h5 className="modal-title" id="exampleModalLabel">Delete Assignment</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize:25}} onClick={() => setShowDeleteModal(!showDeleteModal)}>
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p style={{margin:0}}>Are you sure you want to delete the assignment?</p>
                            </div>
                            <div className="modal-footer" style={{padding:5}}>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{width:"15%"}}
                                 onClick={() => setShowDeleteModal(!showDeleteModal)}>Cancel</button>
                                <button type="button" className="btn btn-primary" style={{width:"15%"}}
                                 onClick={
                                    () =>{
                                        service.deleteAssignment(assignment._id)
                                            .then(() =>{dispatch(deleteAssignment(assignment._id));})
                                        
                                        dispatch(setAssignment({ title: "New assignment", description: "New Description", dueDate: "", availableFromDate:"", availableUntilDate:""}))
                                        setShowDeleteModal(!showDeleteModal)

                                    }
                                 }>Yes</button>
                            </div>
                    </div>
                </div>
        </div>
    );
}

export default DeleteModal;