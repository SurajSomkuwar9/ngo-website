import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";

export default function Carousal() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className="w-screen h-11/12 mb-10 sm:mb-20 p-2"
    >
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/01.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/02.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/03.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/04.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/05.png"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
    </Swiper>
  );
}
