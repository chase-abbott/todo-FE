import React from 'react';
import Todo from './todo';

const data = [
  { todo: 'Hi' },
  { todo: 'Get a job' },
  { todo: 'Get two jobs' }
];

export default function TodoList(){

  const listItems = data.map(item => {
    return (
      <li>
        <Todo todo={item.todo}/>
      </li>
    );
  });
  return (
    <ul>
      {listItems}
    </ul>
  );
}