import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import SubmitButton from './SubmitButton'
import {motion} from 'framer-motion'

export default function SignUpForm() {
  return (
    <motion.form
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: 1, scale: 1}}
    transition={{ type: "tween", ease: "anticipate", duration: 1 }}
    action="http://localhost:5000/register" method="POST" 
    className='flex flex-col h-full pb-5'>
      <div className='grow'>
        <div className='flex flex-col gap-y-[16px] 2xl:gap-y-[25px]'>
          <Input type="email"/>
          <Input type="password"/>

          <div className='ml-[15px]'>
            <Checkbox name='privacyTerms' formId='privacyTermsForm' label='Privacy Terms' isRequired={true}/>
            <Checkbox name='receiveNews' formId='receiveNewsForm' label='Receive emails and notifications' isRequired={false}/>
          </div>
        </div>
      </div>
      
      <div className='text-center flex flex-col gap-y-2'>
        <SubmitButton/>
        <p className='self-center text-[12px] 2xl:text-[20px]'>Already registered? <a href='/login' className='cursor-pointer text-cyan-400'>Login</a></p>
      </div>
    </motion.form>
  )
}