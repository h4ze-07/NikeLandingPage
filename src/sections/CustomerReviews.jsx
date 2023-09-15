import React from 'react'
import { reviews } from '../constants'
import { ReviewCard } from '../components/ReviewCard'

export default function CustomerReviews() {
  return (
    <section className='max-container'>
        <h3 className='font-palanquin text-center text-2xl sm:text-4xl font-bold'>
          What Our
          <span className='text-coral-red'> Custoners</span> Say?
        </h3>
        <p className='info-text m-auto mt-4 max-w-lg text-center'>
          Hear genuine stories from our satisfied customers about their exceptetional experiences with us.
        </p>

        <div className='mt-24 flex flex-col flex-1 justify-evenly lg:flex-row items-center gap-14'>
          {reviews.map((review) => (
              <ReviewCard key={review.customerName} {...review} />
          ))}
        </div>
    </section>
  )
}


