import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from './actions';

function Task({ todo }) {
  const [editing, setEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEditTodo = () => {
    if (updatedDescription.trim()) {
      dispatch(editTodo(todo.id, updatedDescription));
      setEditing(false);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleToggleTodo}
      />
      {editing ? (
        <input
          type="text"
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
          onBlur={handleEditTodo}
          autoFocus
        />
      ) : (
        <span onClick={() => setEditing(true)}>{todo.description}</span>
      )}
    </div>
  );
}

export default Task;
