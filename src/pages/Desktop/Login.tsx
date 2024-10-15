import React from 'react'
import BackgroundGradient from '../../components/BackgroundGradient'
import Logo from '../../components/LogoModels'
import SignUpForm from '../../components/SignUpForm'

export default function Login(){
  return(
    <BackgroundGradient className='flex justify-center raleway text-white'>
      <div className='flex flex-col items-center place-content-evenly'>
        <Logo model={2} className="h-[5.875rem] 2xl:h-[8.313rem] my-[85px] 2xl:mt-[125px] 2xl:mb-[95px] select-none"/>

        <SignUpForm/>
      </div>
    </BackgroundGradient>
  )
}