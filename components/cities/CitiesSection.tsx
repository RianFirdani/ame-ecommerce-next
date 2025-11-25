'use client'
import React from 'react'
import SwiperCities from './Card/SwiperCities'
import { Swiper, SwiperSlide } from 'swiper/react'

const CitiesSection = () => {
  return (
    
    <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
    <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
      <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
        You Can Choose <br />
        Our Favorite Cities
      </h2>
      <a
        href="#"
        className="rounded-full rounded-full py-3 px-5 bg-white font-bold"
      >
        Explore All City
      </a>
    </div>
    <Swiper className="swiper w-full" direction = 'horizontal'
            spaceBetween = {30}
            slidesPerView= "auto"
            slidesOffsetAfter = {30}
            slidesOffsetBefore = {30}>
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide !w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
          <SwiperCities/>
        </SwiperSlide>
      </div>
    </Swiper>
  </section>
    
  )
}

export default CitiesSection