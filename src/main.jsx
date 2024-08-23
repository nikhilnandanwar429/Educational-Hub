import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './Components/index.js'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Toaster from "react-hot-toast"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path = '/login' element= {<Login />} />
      <Route path = '/signup' element = {<Signup />} />
      <Route path = '/dashboard' element = {<Dashboard />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)