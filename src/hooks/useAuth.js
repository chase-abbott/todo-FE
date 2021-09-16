import React, { useState, useEffect } from 'react';
import { LOGIN, SIGNUP } from '../queries/authQueries';


export default function useAuth(){
  const [isLogin, setIsLogin] = useState(true);
  const [mutation, setMutation] = useState(LOGIN);

  useEffect(() => {
    if (isLogin) setMutation(LOGIN);
    else setMutation(SIGNUP);
  }, [isLogin]);

  return { isLogin, setIsLogin, mutation };
}