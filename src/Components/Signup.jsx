import React from 'react'
import Template from '../mainComponents/Template'

function Signup({setIsLogin}) {
  return (
    <div>
      <Template 
        Title = "Learn to Code" 
        Desc1 = "Build skill for today, tommorow and beyond"
        Desc2 = "Education to future-proof your career"
        formType = "Signup"
      />
    </div>
  )
}

export default Signup