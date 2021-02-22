import uuid from 'uuid/v4';

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {
        title: action.task.title, 
        details: action.task.details,
        
        id: uuid()}
      ]
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
} 