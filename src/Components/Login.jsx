import React from 'react'
import Template from '../mainComponents/Template';
import { useSelector, useDispatch } from 'react-redux';
import {login, logout} from "../features/auth/authSlice"

function Login() {

  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  return (
    <div>
    <Template 
      Title = "Welcome Back" 
      Desc1 = "Build skill for today, tommorow and beyond"
      Desc2 = "Education to future-proof your career"
      formType = "Login"
      
    />
  </div>
  )
}

export default Login