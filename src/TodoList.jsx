import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Function to delete a task by its index
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="card max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">To-Do List</h2>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:border-blue-500"
          placeholder="Add a new task..."
        />
        
        <button
          onClick={handleAddTask}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      
      <ul className="mike list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} className="py-1 border-b border-gray-200 flex justify-between">
            <span>{task}</span>
            {/* Delete button for each task */}
            <button
              onClick={() => handleDeleteTask(index)}
              className="delete"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
