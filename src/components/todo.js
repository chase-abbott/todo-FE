import React from 'react';

export default function Todo({ todo, isCompleted }){
  return (
    <div>
      <h1> {todo}</h1>
      <h1> {isCompleted}</h1>
    </div>
  );
}