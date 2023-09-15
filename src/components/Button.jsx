import React from 'react'

export default function Button({label, icon, bgColor, bdColor, textColor, fullWidth}) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 leading-none text-lg rounded-full border ${fullWidth && 'w-full'}
    ${bgColor ? 
      `${bgColor} ${bdColor} ${textColor}` 
    :
      'text-white bg-coral-red border-coral-red'
    }`}>
        {label}
    {icon && <img src={icon} alt={label} className='w-5 h-5 rounded-full ml-2' />}
    </button>
  )
}
