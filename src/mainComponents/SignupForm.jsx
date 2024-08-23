import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signupform({setIsLogin}) {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    conPassword: ""
  })

  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password === formData.conPassword) {
      toast.success("Sign Up success");
      setIsLogin(true);
      navigate("/dashboard");
    } else {
      toast.error("password does't match");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>First Name</p >
        <input
          type = 'text'
          required
          value={formData.firstName}
          onChange={changeHandler}
          placeholder='enter first name'    
          name = "firstName"
        />  
      </label>

    
      <label>
          <p>Last Name</p>
          <input
            type = 'text'
            required
            value={formData.lastName}
            onChange={changeHandler}
            placeholder='enter last name'    
            name = "lastName"
          />  
        </label>

        <label>
          <p>Password<sup>*</sup></p>
          <input
              type = {showPass ? ("text") : ("password")}
              required
              value={formData.password}
              onChange={changeHandler}
              placeholder='enter password'    
              name = "password"
          />

          <span onClick={() => {
                  setShowPass((prev) => !prev);
              }}>
                  {showPass ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)}
          </span>
        </label>

        <label>
          <p>Confirm Password<sup>*</sup></p>
          <input
              type = {showPass ? ("text") : ("password")}
              required
              value={formData.conPassword}
              onChange={changeHandler}
              placeholder='confirm password'    
              name = "conPassword"
          />

          <span onClick={() => {
                  setShowPass((prev) => !prev);
              }}>
                  {showPass ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)}
          </span>
        </label>


        <button>Sign Up</button>
    </form>
  )
}

export default Signupform