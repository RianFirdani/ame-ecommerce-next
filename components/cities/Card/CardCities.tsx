'use client'

import { Swiper, SwiperSlide } from "swiper/react";

const CardCities = async ({products,inventories}) => {

  return (
    <>
      {inventories.flatMap((inv) =>
        products.map((product) => (
          <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        slidesOffsetAfter={30}
        slidesOffsetBefore={30}
        key={product.id}
      >
        <SwiperSlide className="!w-fit">
          <a href="city-details.html" className="card" key={product.id}>
            <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
              <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
                <h3 className="font-bold text-xl leading-[30px] text-white">
                  {product.name}
                </h3>
                <p className="text-white">{product.description}</p>
              </div>
              <img
                src={inv.image}
                className="absolute w-full h-full object-cover"
                alt="thumbnail"
              />
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
          
        ))
      )}
    </>
  );
};

export default CardCities;
