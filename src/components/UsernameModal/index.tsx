import React, { useState } from "react";
import { motion } from "framer-motion";
import UsernameLottie from "../UsernameLottie";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface modalProps {
  className?: string;
}

export default function UsernameModal({ className }: modalProps) {
  let navigate = useNavigate()

  const [inputData, setInputData] = useState({
    username: ""
  })

  const inputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value
    });
  };

  const [cookies, setCookies] = useCookies(['authToken'])

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const token = cookies.authToken

    try {
      const response = await fetch('http://localhost:5000/updateUsername', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },

        body: JSON.stringify(inputData),
      });

      const data = await response.json()
      console.log(data)
      if (data.url) {
        navigate(0)
      } else {
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <motion.div className={`absolute w-screen h-screen bg-black/80 justify-center items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="w-[470px] h-[300px] bg-[#1D1D1D]/100 px-[20px] py-[10px] flex flex-col place-content-between relative"
        initial={{ scale: 0.1, opacity: 0, translateY: 0 }}
        animate={{ scale: 1, opacity: 1, translateY: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <h1 className="mulish text-[25px] font-black text-white">WELCOME!</h1>
          <p className="max-w-[175px] text-[12px] mulish font-regular text-white leading-[15px]">Hey, looks like u are a new user and need a username...</p>
        </div>

        <div className="flex flex-col gap-y-[3px]">
          <form onSubmit={submitHandler}>
            <div className="flex gap-x-[5px]">
              <input type="text" placeholder="Username" name="username" id="idUsername" autoComplete='off' required onChange={inputUpdate} value={inputData.username}
                className="bg-white/10 rounded-full border-[1px] border-solid border-white px-[10px] py-[6px] text-[12px] text-white raleway w-[200px]"
              />

              <button className="bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center glow-button relative z-10" type="submit">
                <img src="https://firebasestorage.googleapis.com/v0/b/falling-bird-41c23.appspot.com/o/arrowright.png?alt=media&token=85d38513-5e7f-4790-98da-7b19ded3a99f"
                  className="invert h-[20px]"
                  alt="" />
              </button>
            </div>
          </form>
          <p className="raleway text-[9px] text-white ml-[5px]"> -You can always change the username in settings</p>
        </div>

        <UsernameLottie />
        {/* 
        <div className="flex gap-x-[5px] items-center">
          <input type="text" placeholder="Username"
            className="bg-transparent rounded-full border-[1px] border-solid border-white px-[10px] py-[6px] text-[12px] text-white raleway"
          />

          <button className="bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center glow-button" type="submit">
            <img src="https://firebasestorage.googleapis.com/v0/b/falling-bird-41c23.appspot.com/o/arrowright.png?alt=media&token=85d38513-5e7f-4790-98da-7b19ded3a99f"
              className="invert h-[20px]"
              alt="" />
          </button>
        </div> */}
      </motion.div>
    </motion.div>
  )
}