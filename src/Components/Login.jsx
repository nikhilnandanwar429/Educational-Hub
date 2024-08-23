import React from 'react'
import Template from '../mainComponents/Template'

function Login({setIsLogin}) {
  return (
    <div>
    <Template 
      Title = "Welcome Back" 
      Desc1 = "Build skill for today, tommorow and beyond"
      Desc2 = "Education to future-proof your career"
      formType = "Login"
      setIsLogin = {setIsLogin}
    />
  </div>
  )
}

export default Login