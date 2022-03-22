import React from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const AircraftFeaturedCard = () => {
  return (
    <div className='aircraft-featured-card'>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="aircraft-featured-card__slider"
      >
        <SwiperSlide>
          <Image src="/images/N31SF_09.jpg" alt="image-alt-text" layout="fill" objectFit="cover" objectPosition="center center"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/N31SF_09.jpg" alt="image-alt-text" layout="fill" objectFit="cover" objectPosition="center center"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/N31SF_09.jpg" alt="image-alt-text" layout="fill" objectFit="cover" objectPosition="center center"/>
        </SwiperSlide>
      </Swiper>
      <div className="aircraft-featured-card__info">
        <div className="aircraft-featured-card__title">
          <h3>Cirrus SR22T</h3>
        </div>
        <ul className="aircraft-featured-card__list">
          <li className="aircraft-featured-card__list-item">
            <span>315 HP</span>
            <span>Caballos de fuerza</span>
          </li>
          <li className="aircraft-featured-card__list-item">
            <span>213 KTAS</span>
            <span>Velocidad Máxima de Crucero</span>
          </li>
          <li className="aircraft-featured-card__list-item">
            <span>25.000 FT</span>
            <span>Altitud Operativa Máxima</span>
          </li>
          <li className="aircraft-featured-card__list-item">
            <span>1.021 NM</span>
            <span>Rango Máx. (50% Potencia)</span>
          </li>
          <li className="aircraft-featured-card__list-item">
            <span>1.246 LBS</span>
            <span>Carga Útil</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
