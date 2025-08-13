import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const [state,setState] = useState('Sign Up')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler = async (event)=>{
    event.preventDefault();

    try {

      if (state === 'Sign Up') {

        const {data} = await axios.post(backendUrl + '/api/user/register',{name,password,email})
        if (data.success) {
          localStorage.setItem('token',data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        
        const {data} = await axios.post(backendUrl + '/api/user/login',{password,email})
        if (data.success) {
          localStorage.setItem('token',data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }

      }

    } catch (error) {
      toast.error(error.message)
    }

  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])


  return (
    <div className='min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-50 to-teal-50 py-12'>
      <form onSubmit={onSubmitHandler} className='w-full max-w-md'>
        <div className='flex flex-col gap-6 m-auto items-start p-8 sm:p-10 bg-white border border-orange-200 rounded-3xl text-zinc-600 text-sm shadow-2xl'>
          <div className="text-center w-full">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👤</span>
            </div>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>{state === 'Sign Up' ? "Create Account" : "Welcome Back"}</h2>
            <p className="text-gray-600">Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
          </div>
          
        {
          state ==="Sign Up" &&  <div className='w-full space-y-2'>
          <label className="text-gray-700 font-medium">Full Name</label>
          <input className='border border-orange-300 rounded-xl w-full p-4 mt-1 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200' type='text' onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter your full name" required/>
        </div>
        }
        
        <div className='w-full space-y-2'>
          <label className="text-gray-700 font-medium">Email</label>
          <input className='border border-orange-300 rounded-xl w-full p-4 mt-1 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200' type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter your email" required/>
        </div>
        <div className='w-full space-y-2'>
          <label className="text-gray-700 font-medium">Password</label>
          <input className='border border-orange-300 rounded-xl w-full p-4 mt-1 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200' type='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter your password" required/>
        </div>
        <button type='submit' className='bg-gradient-to-r from-orange-500 to-teal-500 text-white w-full py-4 rounded-xl text-base font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
          ? <p className="text-center w-full">Already have an account? <span onClick={()=>setState('Login')} className='text-orange-600 font-semibold hover:underline cursor-pointer'>Login here</span></p>
          : <p className="text-center w-full">Create a new account? <span onClick={()=>setState('Sign Up')} className='text-orange-600 font-semibold hover:underline cursor-pointer'>Sign up here</span></p>
        }
        </div>
      </form>
    </div>
  )
}

export default Login