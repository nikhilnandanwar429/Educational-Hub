import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'
import { Toaster } from 'react-hot-toast'


function App() {
  

  return (
    <>
    <Header />
    <Outlet />
    <Toaster />
    <Footer />
    </>
  )
}

export default App
