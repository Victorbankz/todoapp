import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (description.trim()) {
      dispatch(addTodo({
        id: new Date().getTime(),
        description,
        isDone: false
      }));
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTask;