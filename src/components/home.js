import React, { useState, useEffect } from 'react';
import TodoList from './todoList';

export default function Home(){
  const [todo, setTodo] = useState('');

  // get all of user's todos from db via useEffect

  return (
    <div>
      <label className={labelStyle}>
    Todo
        <input 
          className={inputStyle}
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}/>
        {/* add todo to db */}
        <button className={buttonStyle}> Add Todo</button>
      </label>
      <TodoList/>
    </div>
  );
}

const inputStyle = `
border
w-2/4
`;

const labelStyle = `
w-max
flex
justify-evenly
`;
const buttonStyle = `
bg-green-300
rounded
w-1/4
p-px
`;