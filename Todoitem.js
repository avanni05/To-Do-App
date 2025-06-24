import React, { useState } from 'react';

const Todoitem = ({ todo, onUpdate, onToggle, onDelete }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onUpdate(todo.id, editedText);
    }
    setEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={e => setEditedText(e.target.value)}
        />
      ) : (
        <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      )}
      <div>
        <button className="edit" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todoitem;
