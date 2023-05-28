import React from 'react';
import TodoRowItem from './TodoRowItem';

function TodoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((value) => (
          <TodoRowItem
            key={value.rowNumber}
            rowNumber={value.rowNumber}
            rowDescription={value.rowDescription}
            rowAssigned={value.rowAssigned}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
