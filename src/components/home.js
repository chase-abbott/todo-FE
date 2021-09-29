import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation, useQuery, useApolloClient } from '@apollo/client';
import { GET_TODOS } from '../queries/todoQueries.js';
import TodoList from './todoList';
import { ADD_TODO } from '../mutations/todoMutations.js';

export default function Home(){
  const client = useApolloClient();
  const history = useHistory();
  const [todo, setTodo] = useState('');
  const { data, loading, error, refetch } = useQuery(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO);

  const handleAddTodo = () => {
    // adds todo to db
    addTodo({ variables: { content: todo } });

    // refetches data to render
    refetch();
  };

  const logout = () => {
    client.clearStore();
    history.push('/');
  };

  if (loading) return <h1> Loading...</h1>;
  if (error) return <h1> {error.message}</h1>;

  return (
    <div>
      <button 
        className={buttonStyle}
        onClick={logout}>
        Logout </button>
      <label className={labelStyle}>
    Todo
        <input 
          className={inputStyle}
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}/>
        <button 
          className={buttonStyle}
          onClick={handleAddTodo}
        > Add Todo</button>
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