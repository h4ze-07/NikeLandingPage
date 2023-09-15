import React from 'react'
import Button from '../components/Button'

export default function Subscribe() {
  return (
    <section id='contact-us' className='max-container flex items-center justify-evenly max-lg:flex-col gap-5'>
      <h3 className='font-palanquin leading-[68px] lg:max-w-md text-4xl capitalize font-bold text-center'>
        Sign Up for
        <span className='text-coral-red'> Updates</span> & Newsletters
      </h3>

      <div className='lg:max-w-[40%] w-full h-fit flex items-center max-sm:flex-col gap-5 p-3 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full whitespace-nowrap'>
          <Button label='Sign Up' fullWidth={true} />
        </div>
      </div>
    </section>
  )
}
