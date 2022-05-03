import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getStrapiMedia } from "../data/api";

export const AircraftCard = ({ planeInfo }) => {
  const renderDetailList = () => {
    if (planeInfo.featured == true) {
      return planeInfo.details.slice(0, 5).map((item) => {
        return (
          <li className="aircraft-card__list-item" key={item.id}>
            <span>{item.value}</span>
            <span>{item.label}</span>
          </li>
        );
      });
    } else {
      return (
        <li className="aircraft-card__list-item--more">
          <a href="#">
            <span>Ver más</span>
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464465C6.97631 0.269203 6.65973 0.269203 6.46447 0.464466C6.2692 0.659728 6.2692 0.97631 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM4.37114e-08 4.5L10 4.5L10 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="#2E545E"
              />
            </svg>
          </a>
        </li>
      );
    }
  };

  return (
    <div className={`aircraft-card ${planeInfo.featured ? "featured" : ""}`}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="aircraft-card__slider"
      >
        {planeInfo.images.data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Image
                src={getStrapiMedia(item)}
                alt={item.alternativeText}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="aircraft-card__info">
        <div className="aircraft-card__title">
          <h3>
            <a href="#">{planeInfo.name}</a>
          </h3>
        </div>
        <ul className="aircraft-card__list">{renderDetailList()}</ul>
      </div>
    </div>
  );
};
