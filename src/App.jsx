import React, { useState } from 'react'
import { Header } from './Components/index'
import { Outlet } from 'react-router-dom'


function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
      <Outlet />
      
    </>
  )
}

export default App