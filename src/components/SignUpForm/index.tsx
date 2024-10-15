import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import SubmitButton from './SubmitButton'

export default function SignUpForm() {
  return (
    <form action="" className='flex flex-col h-full pb-5'>
      <div className='grow'>
        <div className='flex flex-col gap-y-[16px] 2xl:gap-y-[25px]'>
          <Input type="email"/>
          <Input type="password"/>

          <div className='ml-[15px]'>
            <Checkbox name='privacyTerms' formId='privacyTermsForm' label='Privacy Terms'/>
            <Checkbox name='receiveNews' formId='receiveNewsForm' label='Receive emails and notifications'/>
          </div>
        </div>
      </div>
      
      <div className='text-center flex flex-col gap-y-2'>
        <SubmitButton/>
        <p className='self-center text-[12px] 2xl:text-[20px]'>Already registered? <span className='cursor-pointer text-cyan-400'>Login</span></p>
      </div>
    </form>
  )
}