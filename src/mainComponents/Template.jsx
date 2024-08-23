import React from 'react'
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm";

function Template({Title, Desc1, Desc2, formType, setIsLogin}) {


  return (
    <div>
        <h1>{Title}</h1>

        <div>
            <p>{Desc1}</p>
            <p>{Desc2}</p>
        </div>

        {formType === "Login" ? (<LoginForm setIsLogin = {setIsLogin}/>) : (<SignupForm setIsLogin = {setIsLogin}/>)}


        
        <div>
                <div></div>
                <p>OR</p>
                <div></div>
        </div>

            <button>
                <p>Sign in with google</p>
            </button>



    </div>
  )
}

export default Template