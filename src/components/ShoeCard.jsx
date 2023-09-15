import React from 'react'

export default function ShoeCard({img, changeShoeFunc, bigShoeImg}) {

    const handleClick = () => {
        if (bigShoeImg !== img.bigShoe) {
            changeShoeFunc(img.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl
        ${bigShoeImg === img.bigShoe ? 'border-coral-red' : 'border-transparent'}
        cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={img.thumbnail} alt="shoes" width={127} height={103} className='object-contain' />
        </div>
    </div>
  )
}
