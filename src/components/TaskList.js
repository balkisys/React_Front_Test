import React, { useContext } from 'react';
import TaskDetails from './TaskDetails';
import { TaskContext } from '../contexts/TaskContext';
import NewListForm from './NewListForm';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return tasks.length ? (
    <div className="task-list">
      <ul>
        {tasks.map(task => {
          return ( <TaskDetails task={task} key={task.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Zéro tache ! </div>
    
    );
  
}

export default TaskList;