import React from 'react'
import BackgroundGradient from '../../components/BackgroundGradient'
import Logo from '../../components/LogoModels'
import SignUpForm from '../../components/SignUpForm'

export default function Login() {
  return (
    <BackgroundGradient className='flex justify-center raleway text-white' glowVar='small'>
      <a href="/home">
        <div className='absolute left-5 top-5 flex items-center glow-text'>
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/falling-bird-41c23.appspot.com/o/arrow%20left.png?alt=media&token=f56cd161-f646-4898-95fa-24ade1e59d64" alt="" 
          className='h-6'
          />
          BACK TO HOME
        </div>
      </a>


      <div className='flex flex-col items-center place-content-evenly'>
        <Logo model={2} className="h-[5.875rem] 2xl:h-[8.313rem] my-[85px] 2xl:mt-[125px] 2xl:mb-[95px] select-none" />

        <SignUpForm />
      </div>
    </BackgroundGradient>
  )
}