import React, { useState } from 'react';
import './Todolist.css';

function  Todolist() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !=='') {
            setTasks([...tasks, inputValue.trim()]);
        setInputValue('');       
        }
    };

      const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="Todolist">
     
      <input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {tasks.length === 0 ? (
          <li className="no-tasks">No tasks, add a task</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task">
              {task}
              <span className="delete" onClick={() => deleteTask(index)}>✖</span>
            </li>
          ))
        )}
      </ul>
      <div className="counter">{tasks.length} items left{tasks.length !== 1 ? '' : ''}</div>
    </div>
  );
}

export default Todolist;
