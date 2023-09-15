import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

export default function PopularProducts() {
  return (
    <section id='products' className='max-container max-sm:mt-12'>

      <div className='flex flex-col gap-7'>
        <h2 className='font-bold font-palanquin text-4xl'> Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='max-w-sm md:max-w-md lg:max-w-lg text-slate-gray mt-2 font-montserrat'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value!</p>
      </div>

      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4'>
        {products.map((product) => (
          <PopularProductCard key={product.name} product={product} />
        ))}
      </div>

    </section>
  )
}
