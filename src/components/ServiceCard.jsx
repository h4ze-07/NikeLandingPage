import React from 'react'

export default function ServiceCard({imgURL, label, subtext}) {
  return (
    <div className='flex-1 w-full sm:w-[350px] sm:min-w-[350px] shadow-3xl rounded-2xl px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold '>{label}</h3>
        <p className='mt-3 break-words text-slate-gray leading-normal text-lg font-montserrat'>{subtext}</p>
    </div>
  )
}
