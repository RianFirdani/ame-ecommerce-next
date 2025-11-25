import { getProducts } from '@/libs/products/Products'
import React from 'react'

const SwiperCities = async () => {
    const Products = await getProducts()
    console.log(Products)
  return (
    Products.data.map((product)=>{
        return(
            <a href="city-details.html" className="card" key={product.id}>
            <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
              <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
                <h3 className="font-bold text-xl leading-[30px] text-white">
                  {product.name}
                </h3>
                <p className="text-white">{product.description}</p>
              </div>
              <img
                src={product.image}
                className="absolute w-full h-full object-cover"
                alt="thumbnails"
              />
            </div>
    </a>
        )
    })
  )
}

export default SwiperCities