import React from 'react';

export default function Auth() {
  return (
    <form className={formStyle}>
      <label className={labelStyle}>
      Username
        <input className={inputStyle}type="text"/>
      </label>
      <label className={labelStyle}>
        Password
        <input className={inputStyle}type="text"/>
      </label>
      <button className={buttonStyle}>Log In</button>
    </form>
  );
}
const formStyle = `
flex 
bg-gray-200 
flex-col 
w-6/12 
h-40
p-4
items-center
justify-evenly
m-40
rounded
`;

const labelStyle = `
w-max
flex
justify-evenly
`;

const inputStyle = `
border
w-2/4
`;


const buttonStyle = `
bg-green-300
rounded
w-1/4
`;