import React from 'react'
import { star } from '../assets/icons'

export default function ({product}) {
  return (
    <div className='flex flex-1 flex-col w-full'>
      <img src={product.imgURL} alt={product.name} className='w-[280px] h-[280px]' />
      <div className='mt-8 flex gap-3 justify-start items-center'>
        <img src={star} alt="rating"  width={24} height={24} />
        <p className='text-slate-gray font-montserrat text-xl leading-normal'>{product.rate}</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{product.name}</h3>
      <p className='mt-2 font-bold text-coral-red text-xl leading-normal font-montserrat'>{product.price}</p>
    </div>
  )
}
