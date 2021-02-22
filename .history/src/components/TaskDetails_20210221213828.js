import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCardBody ,MDBCard} from 'mdbreact';

const TaskDetails = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  return (
    
    <div>
      <MDBRow>
                <MDBCol md="6" >
      <strong className="title">{task.title}</strong>
        <div className="details">{task.details}</div>
        <button type="button" class="btn btn-outline-danger btn-sm" onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id })}>
  <i class="fas fa-trash-alt"></i>
</button>
        </MDBCol>
        </MDBRow>
    </div>    
   
  );
}

export default TaskDetails;