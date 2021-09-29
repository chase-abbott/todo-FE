import React from 'react';
import Todo from './todo';

export default function TodoList({ todos }){

  const listItems = todos.map(item => {
    return (
      <li>
        <Todo todo={item.content} isCompleted={item.completed}/>
      </li>
    );
  });
  return (
    <ul>
      {listItems}
    </ul>
  );
}