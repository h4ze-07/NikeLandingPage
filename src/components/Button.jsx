import React from 'react'

export default function Button({label, icon}) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4  leading-none text-lg rounded-full text-white bg-coral-red'>
        {label}

    {icon && <img src={icon} alt={label} className='w-5 h-5 rounded-full ml-2' />}
    </button>
  )
}
