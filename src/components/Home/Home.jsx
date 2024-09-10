import React from 'react'
import toast from 'react-hot-toast'

function Home() {
  return (
    <div className={`w-full h-full `}  onClick={() => toast.success('Hello')}>
        Home Hello
        
    </div>
  )
}

export default Home