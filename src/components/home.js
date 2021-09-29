import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TODOS } from '../queries/todoQueries';
import TodoList from './todoList';

export default function Home(){
  const [todo, setTodo] = useState('');
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <h1> Loading...</h1>;
  if (error) return <h1> {error.message}</h1>;

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
        {/* refetch */}
        <button className={buttonStyle}> Add Todo</button>
      </label>
      {data
        ? <TodoList todos={data.todos}/>
        : null
      }
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