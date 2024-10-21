import React, { useState } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import SubmitButton from './SubmitButton'
import { motion } from 'framer-motion'

export default function SignUpForm() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    privacyTerms: false,
    receiveNews: false
  })

  const [logText, setLogText] = useState('')

  const formUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json()
      console.log(data)
      setLogText(data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "tween", ease: "anticipate", duration: 1 }}
      // action="http://localhost:5000/register" method="POST"
      onSubmit={submitHandler}
      className='flex flex-col h-full pb-5'>
      <div className='grow'>
        <div className='flex flex-col gap-y-[16px] 2xl:gap-y-[25px]'>
          {/* <Input type="email" /> */}
          {/* <Input type="password" /> */}
          <div>
            <h2 className='ml-[15px] text-[15px] 2xl:text-[25px]'>Email</h2>

            <input type="email" name="email" id="registerEmailForm" placeholder='emailsample@gmail.com' autoComplete='off' required onChange={formUpdate}
              className='w-[18rem] 2xl:w-[25.313rem] rounded-full px-[25px] py-[13px] 2xl:py-[13px] text-[15px] 2xl:text-[20px] bg-white/10 border-solid border-white border-[1px]'
            />
          </div>

          <div>
            <h2 className='ml-[15px] text-[15px] 2xl:text-[25px]'>Password</h2>

            <input type="password" name="password" id="registerPasswordForm" placeholder='Password' autoComplete='off' required onChange={formUpdate}
              className='w-[18rem] 2xl:w-[25.313rem] rounded-full px-[25px] py-[13px] 2xl:py-[13px] text-[15px] 2xl:text-[20px] bg-white/10 border-solid border-white border-[1px]'
            />
          </div>

          <div className='ml-[15px]'>
            {/* <Checkbox name='privacyTerms' formId='privacyTermsForm' label='Privacy Terms' isRequired={true} /> */}
            {/* <Checkbox name='receiveNews' formId='receiveNewsForm' label='Receive emails and notifications' isRequired={false} /> */}

            <div>
              <input type="checkbox" name={"privacyTerms"} id={"privacyTermsForm"} className='h-3 w-3 2xl:h-4 2xl:w-4' required onChange={formUpdate} />
              <label htmlFor={"privacyTermsForm"} className='text-[15px] 2xl:text-[20px] ml-2'>{"Privacy Terms"}</label>
            </div>

            <div>
              <input type="checkbox" name={"receiveNews"} id={"receiveNewsForm"} className='h-3 w-3 2xl:h-4 2xl:w-4' onChange={formUpdate} />
              <label htmlFor={"receiveNewsForm"} className='text-[15px] 2xl:text-[20px] ml-2'>{"Receive emails and notifications"}</label>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center flex flex-col gap-y-2'>
        <SubmitButton />
        <p className='self-center text-[12px] 2xl:text-[20px]'>Already registered? <a href='/login' className='cursor-pointer text-cyan-400'>Login</a></p>
        <p className='text-red-500 text-[10px]'>{logText}</p>
      </div>


    </motion.form>
  )
}