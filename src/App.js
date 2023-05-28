import React, { useState } from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [showTodoForm, setShowTodoForm] = useState(false);

  const [todos, setTodods] = useState([
    { rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User two' },
    { rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One' },
    {
      rowNumber: 4,
      rowDescription: 'Charge Phone Battery',
      rowAssigned: 'User One',
    },
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodods((todos) => [...todos, newTodo]);
    console.log(todos);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodods(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowTodoForm(!showTodoForm)}
          >
            {showTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
