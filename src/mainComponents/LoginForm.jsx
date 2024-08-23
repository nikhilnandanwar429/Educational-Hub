import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {Link, useNavigate} from "react-router-dom"
import toast from "react-hot-toast"
import { useSelector, useDispatch } from 'react-redux';
import {login, logout} from "../features/auth/authSlice"


function LoginForm({setIsLogin}) {

    const isLogin = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function changeHandler(event) {
        setFormData((preData) => ({
            ...preData,
            [event.target.name]: event.target.value
        }))
    }

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        navigate('/dashboard');
        dispatch(login());
        toast.success("Logged In");
    }

    const [showPass, setShowPass] = useState(false);
  return (
    <form onSubmit={submitHandler}>
    <label>
        <p>Email Address<sup>*</sup></p>
        <input
        type = 'email'
        required
        value={formData.email}
        onChange={changeHandler}
        placeholder='enter email id'    
        name = "email"
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

            <Link to = "#">
                <p>
                    Forget password
                </p> 
            </Link>
        </label>

        <button>LogIn</button>
    </form>
  )
}

export default LoginForm