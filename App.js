import './App.css'
import React from 'react';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="app-container">
      <h1>📝 My To-Do List</h1>
      <TodoApp />
    </div>
  );
}

export default App;
