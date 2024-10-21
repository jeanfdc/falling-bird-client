import React from 'react'

interface CheckboxProps {
  name: string;
  formId: string;
  label: string;
  isRequired: boolean;
}

export default function Checkbox({ name, label, formId, isRequired }: CheckboxProps) {
  return (
    <div>

      {isRequired == true &&
        <div>
          <input type="checkbox" name={name} id={formId} className='h-3 w-3 2xl:h-4 2xl:w-4' required />
          <label htmlFor={formId} className='text-[15px] 2xl:text-[20px] ml-2'>{label}</label>
        </div>}

      {isRequired == false &&
        <div>
          <input type="checkbox" name={name} id={formId} className='h-3 w-3 2xl:h-4 2xl:w-4' />
          <label htmlFor={formId} className='text-[15px] 2xl:text-[20px] ml-2'>{label}</label>
        </div>}
    </div>
  )
}