import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Brands() {
  const { t } = useTranslation();
  const bestSellers = [
    { id: 1, name: "Rolex Submariner", img: "https://i.pinimg.com/736x/bb/82/92/bb8292e02266bc02ee33d6332c1a9ae3.jpg", price: "12,000$" },
    { id: 2, name: "Omega Seamaster", img: "https://i.pinimg.com/1200x/ae/f3/4d/aef34dde933bf815b9af35405308fda6.jpg", price: "8,500$" },
    { id: 3, name: "Patek Philippe", img: "https://i.pinimg.com/736x/0d/90/3b/0d903b3e3235a2b337e4ba684b8245d1.jpg", price: "45,000$" },
    { id: 4, name: "Audemars Piguet", img: "https://i.pinimg.com/1200x/7c/c1/fa/7cc1fa8c966c0751a5373559b659799d.jpg", price: "38,000$" },
  ];
  return (
    <>
    <div className='mt-[50px] mb-[50px]'>
      <h1 className='uppercase text-[25px] text-center font-bold tracking-widest'>{t('best_seller')}</h1>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1} 
        navigation={true} 
        pagination={{ clickable: true }} 
        loop={true} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {bestSellers.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='flex flex-col items-center p-6 bg-gray-50  rounded-lg'>
              <img src={item.img} alt={item.name} className='w-full h-[300px] rounded-2xl object-cover hover:scale-105 transition-transform duration-500' />
              <h3 className='mt-4 text-xl font-serif italic dark:text-black'>{item.name}</h3>
              <p className='text-[#D4AF37] font-bold'>{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      
    </>
  )
}

export default Brands
