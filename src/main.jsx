import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Courses, Footer, ForgotPassword, Header, Home, Login, Signup } from './components/index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />}/>
      <Route path='courses' element={<Courses />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='forgotpassword' element={<ForgotPassword/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
