import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header({isLogin, setIsLogin}) {

    const navigate = useNavigate();
    
    

    return (
        <header className='w-full h-20 bg-white  flex px-4 py-4 justify-center border border-b-lime-500 shadow-md'  >
            <div className="w-full xl:w-9/12 bg-white  flex px-4  justify-between">
                <div className='w-auto text-start text-3xl font-bold '>
                    Hello World
                </div>
                <div className='w-2/5 xl:w-1/3 hidden md:flex flex-col justify-center '>
                    <ul className='flex items-center justify-between '>
                        <li >
                            <NavLink to="/" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                Home
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/projects" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                Projects
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/profiles" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                Profiles
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                Contacts
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/" className='font-bold hover:bg-slate-300 hover:px-2 hover:rounded-lg'>
                                Courses
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='w-auto text-end hidden md:block cursor-pointer'>
                    {!isLogin && 
                    <div className="flex  ">
                        <h1 className='bg-blue-800 w-auto font-bold p-2 px-5 mx-3 rounded-2xl text-white ' 
                        onClick={() => {
                            navigate('/login');
                        }}>
                            Log In
                        </h1>
                        <h1 className='bg-blue-800 w-auto font-bold p-2 px-5 mx-3 rounded-2xl text-white' onClick={() => {
                            navigate('/signup');
                        }}>
                            Sign Up
                        </h1>
                    </div>
                    }

                    {isLogin && 
                    <div className="display flex flex-col">
                        <h1 className='bg-blue-800 w-auto font-bold p-2 px-5 rounded-2xl text-white'>
                            DashBoard
                        </h1>
                        <h1 className='bg-blue-800 w-auto font-bold p-2 px-5 rounded-2xl text-white'
                        onClick={setIsLogin(false)}>
                            Log Out
                        </h1>
                    </div>
                    }
                </div>

                {/* // Three line button */}
                <label className="md:hidden ">
                    <div className="w-9 h-10 flex flex-col items-center justify-center">
                        <input className="hidden peer" type="checkbox" />
                        <div
                            className="w-[60%] h-[2px]  bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.5rem] peer-checked:rotate-[-45deg]"
                        ></div>
                        <div
                            className="w-[60%] h-[2px]  bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                        ></div>
                        <div
                            className="w-[60%] h-[2px]  bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.5rem] peer-checked:rotate-[45deg]"
                        ></div>
                    </div>
                    <div className="bg-red-700 w-36 h-80 ">
                        
                    </div>
                </label>

            </div>
            

        </header>
                
    )
}

export default Header