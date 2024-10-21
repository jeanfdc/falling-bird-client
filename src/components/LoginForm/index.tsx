import React, { useState } from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'

export default function LoginForm() {
  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [logText, setLogText] = useState('')

  const formUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [cookies, setCookies] = useCookies(['authToken'])

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // console.log(formData)
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json()
      if(data.url){
        navigate(data.url, { replace: true })
        setCookies('authToken', data.authToken)
      } else{
        console.log(data.message)
        setLogText(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "tween", ease: "anticipate", duration: 1 }}
      // action="http://localhost:5000/login" method="POST"
      onSubmit={submitHandler}
      className='flex flex-col h-full pb-5'>
      <div className='grow'>
        <div className='flex flex-col gap-y-[16px] 2xl:gap-y-[25px]'>
          {/* <Input type="email" /> */}
          {/* <Input type="password" /> */}
          <div>
            <h2 className='ml-[15px] text-[15px] 2xl:text-[25px]'>Email</h2>

            <input type="email" name="email" id="loginEmailForm" placeholder='emailsample@gmail.com' autoComplete='off' required onChange={formUpdate} value={formData.email}
              className='w-[18rem] 2xl:w-[25.313rem] rounded-full px-[25px] py-[13px] 2xl:py-[13px] text-[15px] 2xl:text-[20px] bg-white/10 border-solid border-white border-[1px]'
            />
          </div>

          <div>
            <h2 className='ml-[15px] text-[15px] 2xl:text-[25px]'>Password</h2>

            <input type="password" name="password" id="loginPasswordForm" placeholder='Password' autoComplete='off' required onChange={formUpdate} value={formData.password}
              className='w-[18rem] 2xl:w-[25.313rem] rounded-full px-[25px] py-[13px] 2xl:py-[13px] text-[15px] 2xl:text-[20px] bg-white/10 border-solid border-white border-[1px]'
            />
          </div>
        </div>
      </div>

      <div className='text-center flex flex-col gap-y-2'>
        <SubmitButton />
        <p className='self-center text-[12px] 2xl:text-[20px]'>Dont have an account? <a href='/register' className='cursor-pointer text-cyan-400'>Register now</a></p>
        <p className='text-red-500 text-[10px]'>{logText}</p>
      </div>
    </motion.form>
  )
}