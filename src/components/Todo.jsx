import React, { useState } from 'react';

const Todo = ({ task, completeTask, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <button onClick={() => completeTask(task.id)}></button>
      <button onClick={() => deleteTask(task.id)}></button>
    </div>
  );
};

export default Todo;
