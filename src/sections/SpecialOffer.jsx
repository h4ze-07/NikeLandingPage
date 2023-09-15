import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

export default function SpecialOffer() {
  return (
    <section className='flex justify-between items-center gap-10 max-container max-xl:flex-col-reverse'>

      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            <span className='text-coral-red'>Special</span> Offer
        </h2>
          <p className='mt-4 w-full xl:max-w-lg info-text'>
            Embark on a shopping journey that redefines your experience  with unbeateble deals. From premier selections to increadible savings, we offer unparalleled valie that sets us apart.
          </p>
          <p className='mt-6 w-full xl:max-w-lg info-text hidden sm:block'>
            Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptetional!
          </p>
          <div className='mt-11 flex flex-wrap gap-3 items-center'>
            <Button label='View details' />
            <Button label='Learn more' bgColor='bg-white' bdColor='border-slate-gray' textColor='text-slate-gray' />
          </div>
      </div>

    </section>
  )
}
