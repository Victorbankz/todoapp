
import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import Action from './Action';


function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;