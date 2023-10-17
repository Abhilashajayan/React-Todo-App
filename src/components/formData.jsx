import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list bg-gradient-to-b from-blue-300 via-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className='text-4xl text-blue-200' >Todo App</h1>
      <input
        type="text"
        value={input}
        className='bg-gray-200  h-9 w-80 rounded '
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
