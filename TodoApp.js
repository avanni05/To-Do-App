import React, { useState, useEffect } from 'react';
import Todoitem from './Todoitem';
import Filterbar from './Filterbar';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const updateTask = (id, updatedText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    ));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'all'
      ? true
      : filter === 'active'
      ? !todo.completed
      : todo.completed
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task..."
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTask()}
      />
      <button onClick={addTask}>Add</button>

      <Filterbar filter={filter} setFilter={setFilter} />

      {filteredTodos.map(todo => (
        <Todoitem
          key={todo.id}
          todo={todo}
          onUpdate={updateTask}
          onToggle={toggleComplete}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoApp;
