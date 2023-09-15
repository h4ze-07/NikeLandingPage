import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

export default function Hero() {

  const [bigShoe, setBigShoe] = useState(bigShoe1)

  return (
    <section id='home' className='max-container w-full min-h-screen flex flex-col gap-10 xl:flex-row'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our summer collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className=' font-montserrat text-slate-gray leading-8 mt-6 text-lg mb-14 sm:max-w-[390px]'>
          Discover stylish Nike arrivals, quality comfort and innovation for your active life!
        </p>
        <Button label='Shop Now' icon={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <h2 className='text-4xl font-bold font-palanquin'>{stat.value}</h2>
              <h3 className='leading-7 font-montserrat text-slate-gray'>{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoe} alt="big shoe" width={610} height={500} className='relative z-10 object-contain' />

        <div className='flex gap-3 sm:gap-6 absolute -bottom-[5%] sm:left-[10% max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <div key={shoe.id}>
              <ShoeCard img={shoe} changeShoeFunc={(shoe) => {setBigShoe(shoe)}} bigShoeImg={bigShoe} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
