import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

const AuthStatus = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User is {isLogin ? 'Logged In' : 'Logged Out'}</h2>
      {isLogin ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
};

export default AuthStatus;
