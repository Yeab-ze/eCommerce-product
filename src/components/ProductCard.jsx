import React from 'react'

const ProductCard = ({img, name,  desc, price}) => {
  return (
    <>
        <div className="border shadow-lg rounded-md p-4">
          <img src={img} alt="product image" />
          <h3 className='text-blue-500 font-bold'>{name}</h3>
          <p className='text-sm'>{desc}</p>
          <p className='text-cyan-500'>{price}</p>
        </div>
    </>
  )
}

export default ProductCard