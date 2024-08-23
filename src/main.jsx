import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, Login, Signup,Dashboard } from './Components/index.js'
import Toaster from "react-hot-toast"
import { Provider } from 'react-redux'
import store from './store/index.js'

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
    <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
    </Provider>
    
  </React.StrictMode>,
)