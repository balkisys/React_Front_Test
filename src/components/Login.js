import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

export default function Login() {
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
        <div>
           <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task title" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Task Details" value={details}
        onChange={(e) => setDetails(e.target.value)} required />
      <input type="submit" value="add Task" />
    </form>
        </div>
    )
}
