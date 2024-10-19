import React from "react";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

export default function Buttons() {
let navigate = useNavigate()

  return (
    <motion.div 
    className='flex gap-x-[20px] justify-center pb-10'
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: 1, scale: 1}}
    transition={{duration: 0.5}}
    >
      <button
        onClick={() => { navigate('/register')}}
        className='text-black bg-white rounded-full p-[8px] 2xl:p-[16px] w-[154px] 2xl:w-[217px] raleway text-[15px] 2xl:text-[25px] font-semibold glow-button'>
        Crie Sua Conta
      </button>

      <button
        onClick={() => {navigate('/chats')}}
        className='text-white bg-transparent solid border-white border-2 rounded-full p-[8px] 2xl:p-[16px] w-[235px] 2xl:w-[331px] raleway text-[15px] 2xl:text-[25px] font-semibold glow-button'>
        Abra no seu navegador
      </button>
    </motion.div>
  )
}