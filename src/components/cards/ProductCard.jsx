import React from 'react';
import {IoIosHeartEmpty}  from 'react-icons/io'


const ProductCard = ({product}) => {

  return (
    <div className='product-card'>
        <img src={product?.image} alt={product?.category} />
        <p className='product-name'>{product?.title?.slice(0, 11)}</p>
        <IoIosHeartEmpty className='icon' size={20}/>
    </div>
  )
}

export default ProductCard