import React from "react";
import Input from './Input'
import SubmitButton from './SubmitButton'
import { motion } from "framer-motion";

export default function LoginForm() {
  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "tween", ease: "anticipate", duration: 1 }}
      action="http://localhost:5000/login" method="POST"
      className='flex flex-col h-full pb-5'>
      <div className='grow'>
        <div className='flex flex-col gap-y-[16px] 2xl:gap-y-[25px]'>
          <Input type="email" />
          <Input type="password" />
        </div>
      </div>

      <div className='text-center flex flex-col gap-y-2'>
        <SubmitButton />
        <p className='self-center text-[12px] 2xl:text-[20px]'>Dont have an account? <a href='/register' className='cursor-pointer text-cyan-400'>Register now</a></p>
      </div>
    </motion.form>
  )
}