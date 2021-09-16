import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useMutation } from '@apollo/client';

export default function Auth() {
  const { isLogin, setIsLogin, mutation } = useAuth();
  const [authenticate, { data, loading, error }] = useMutation(mutation);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (loading) return <h1> Loading...</h1>;

  if (error) return `Submission Failed ${error.message}`;

  const handleToggle = () => {
    setIsLogin(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate({ variables: { username, password } });
  };

  return (
    <div className={container}>
      <form className={formStyle}>
        <label className={labelStyle}>
      Username
          <input 
            className={inputStyle}
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}/>
        </label>
        <label className={labelStyle}>
        Password
          <input 
            className={inputStyle}
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
        </label>
        <button 
          className={buttonStyle} 
          onClick={handleSubmit}
        >
          {isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>
      <button onClick={handleToggle}>{isLogin ? 'Already have an account?' : 'Need to sign up?'}</button>
    </div>
  );
}

const container = `
flex
flex-col`;

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