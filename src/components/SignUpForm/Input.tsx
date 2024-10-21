import React from 'react'

interface InputProps {
  type: string;
}

export default function Input({ type }: InputProps) {
  return (
    <div>
      {type == "email" &&
        <div>
          <h2 className='ml-[15px] text-[15px] 2xl:text-[25px]'>Email</h2>

          <input type="email" name="email" id="registerEmailForm" placeholder='emailsample@gmail.com' autoComplete='off' required
            className='w-[18rem] 2xl:w-[25.313rem] rounded-full px-[25px] py-[13px] 2xl:py-[13px] text-[15px] 2xl:text-[20px] bg-white/10 border-solid border-white border-[1px]'
          />
        </div>
      }

      {type == "password" &&
        <div>
          <h2 className='ml-[15px] text-[15px] 2xl:text-[25px]'>Password</h2>

          <input type="password" name="password" id="registerPasswordForm" placeholder='Password' autoComplete='off' required
            className='w-[18rem] 2xl:w-[25.313rem] rounded-full px-[25px] py-[13px] 2xl:py-[13px] text-[15px] 2xl:text-[20px] bg-white/10 border-solid border-white border-[1px]'
          />
        </div>
      }
    </div>
  )
}