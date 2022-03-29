import React from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const AircraftFeaturedCard = ({planeDetails}) => {
  return (
    <div className='aircraft-featured-card'>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="aircraft-featured-card__slider"
      >
        {planeDetails.images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a href="#">
                <Image src={item.url} alt={planeDetails.name} layout="fill" objectFit="cover" objectPosition={item.position}/>
              </a>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="aircraft-featured-card__info">
        <div className="aircraft-featured-card__title">
          <h3><a href="#">{planeDetails.name}</a></h3>
        </div>
        <ul className="aircraft-featured-card__list">
          {planeDetails.details.map((item, index) => {
            return (
              <li className="aircraft-featured-card__list-item" key={index}>
                <span>{item.fieldName}</span>
                <span>{item.data}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};
