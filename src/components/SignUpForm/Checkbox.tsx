import React from 'react'

interface CheckboxProps{
  name: string;
  formId: string;
  label: string;
}

export default function Checkbox({name, label, formId}: CheckboxProps){
  return(
    <div>
      <input type="checkbox" name={name} id={formId} className='h-3 w-3 2xl:h-4 2xl:w-4' required />
      <label htmlFor={formId} className='text-[15px] 2xl:text-[20px] ml-2'>{label}</label>
    </div>
  )
}