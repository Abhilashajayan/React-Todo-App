import React, { useState } from 'react';

const Todo = ({ task, deleteTask  }) => {
  return (
    <div className='bg-white-200 mt-3 rounded h-15 text-black'>
      <span className='mr-2'>{task.text}</span>

      <button type="button" onClick={() => deleteTask(task.id)} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-3 mb-2">Delete</button>

    </div>
  );
};

export default Todo;
