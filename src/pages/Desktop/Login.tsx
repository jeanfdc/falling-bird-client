import React from 'react'
import BackgroundGradient from '../../components/BackgroundGradient'
import Logo from '../../components/Logo'

export default function Login(){
  return(
    <BackgroundGradient className='flex flex-col items-center justify-center'>
      <Logo model={2} className="h-[5.875rem] 2xl:h-[8.313rem] mt-[5.313rem] 2xl:mt-[7.813rem]"/>

      <div className='text-white raleway mt-[5.313rem] 2xl:mt-[7.813rem]'>
        <form action="" className='flex flex-col gap-y-[16px] 2xl:gap-y-[25px]'>
          <div>
            <h2 className='ml-[15px] text-[15px] 2xl:text-[25px]'>Email</h2>

            <input type="email" name="email" id="loginEmailForm" placeholder='emailsample@gmail.com' autoComplete='off' required
              className='w-[18rem] 2xl:w-[25.313rem] rounded-full px-[25px] py-[13px] 2xl:py-[13px] text-[15px] 2xl:text-[20px] bg-white/10 border-solid border-white border-[1px]'
            />
          </div>
          
          <div>
            <h2 className='ml-[15px] text-[15px] 2xl:text-[25px]'>Password</h2>

            <input type="password" name="password" id="loginPasswordForm" placeholder='Password' autoComplete='off' required
              className='w-[18rem] 2xl:w-[25.313rem] rounded-full px-[25px] py-[13px] 2xl:py-[13px] text-[15px] 2xl:text-[20px] bg-white/10 border-solid border-white border-[1px]'
            />
          </div>

          <div className='ml-[15px]'>
            <div>
              <input type="checkbox" name="privacyTerms" id="privacyTermsForm" className='h-3 w-3 2xl:h-4 2xl:w-4' required/>
              <label htmlFor="privacyTermsForm" className='text-[15px] 2xl:text-[20px] ml-2'>Privacy Terms</label>
            </div>
            
            <div>
              <input type="checkbox" name="receiveNews" id="receiveNewsForm" className='h-3 w-3 2xl:h-4 2xl:w-4' required/>
              <label htmlFor="receiveNewsForm" className='text-[15px] 2xl:text-[20px] ml-2'>Receive emails and notifications</label>
            </div>
          </div>

          <button type='submit' 
          className='w-[6.875rem] 2xl:w-[9.688rem] rounded-full bg-white/10 border-solid border-white border-[1px] self-center text-[15px] 2xl:text-[25px] py-2 mt-10 2xl:mt-28 glow-button'>Sign Up</button>
          <p className='self-center text-[12px] 2xl:text-[20px]'>Already registered? <span className='cursor-pointer text-cyan-400'>Login</span></p>
        </form>
      </div>
    </BackgroundGradient>
  )
}