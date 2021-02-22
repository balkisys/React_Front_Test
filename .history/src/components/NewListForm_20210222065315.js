import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const NewListForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', task: { title, details }});
    setTitle('');
    setDetails('');
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input type="text"  className="form-control" placeholder="Nom de la tache" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <br/>
      <input type="text" placeholder="Description" className="form-control" value={details}
        onChange={(e) => setDetails(e.target.value)} required />
      <div className="text-center mt-4"> 
        <input class="btn btn-info" type="submit" value="Ajouter la tache " />
        </div>
    </form>
  );
}
 
export default NewListForm;