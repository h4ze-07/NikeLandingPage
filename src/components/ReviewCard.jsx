import React from 'react'
import { star } from '../assets/icons'

export const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <section className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="customer" className='rounded-full object-cover w-[120px] h-120px' />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2'>
            <img src={star} alt="rate" width={24} height={24} className='object-contain m-0' />
            <p className='font-semibold text-slate-gray font-montserrat text-xl'>{rating}</p>
        </div>
        <h3 className='mt-3 font-bold font-palanquin text-3xl'>{customerName}</h3>
    </section>
  )
}
