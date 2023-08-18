import React, { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      // Проверка на дублирование задач
      if (!tasks.includes(newTask)) {
        setTasks([...tasks, newTask]);
        setNewTask('');
      } else {
        alert('Это задача уже существует');
      }
    }
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearTasks}>Clear Tasks</button>
      </div>
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;





