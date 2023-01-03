import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getStrapiMedia } from "../data/api";
import Link from "next/link";
import { ArrowRight } from "./Icons/ArrowRight";
import useModal from "../hooks/useModal";

export const AircraftCard = ({ planeInfo }) => {
  const { toggleModal, setData } = useModal((state) => ({
    toggleModal: state.toggleModal,
    setData: state.setData,
  }));

  const renderSpecsList = () => {
    if (planeInfo.featured == true) {
      return planeInfo.specs.slice(0, 5).map((item) => {
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
          <Link href="/aeronaves/[id]" as={`/aeronaves/${planeInfo.model}`}>
            <>
              <span>Ver más</span>
              <ArrowRight />
            </>
          </Link>
        </li>
      );
    }
  };

  if (!planeInfo) {
    return (
      <div className="aircraft-card">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="aircraft-card__slider"
        >
          <SwiperSlide key="aeronaves-usadas">
            <Image
              src="/images/IMG_9715.jpg"
              alt="Aeronaves usadas"
              fill={true}
              sizes="100vw, (min-width: 992px) 465px, (min-width: 1280px) 555px"
              style={{ objectFit: "cover" }}
              priority={false}
              onClick={() => {
                setData("gallery", "/images/IMG_9715.jpg");
                toggleModal("gallery");
              }}
            />
          </SwiperSlide>
        </Swiper>
        <div className="aircraft-card__info">
          <div className="aircraft-card__title">
            <h3>
              <Link href="/aeronaves-usadas">Aeronaves Usadas</Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }

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
                src={getStrapiMedia(item, planeInfo.featured ? null : "medium")}
                alt=""
                fill={true}
                sizes="100vw, (min-width: 992px) 465px, (min-width: 1280px) 555px"
                style={{ objectFit: "cover" }}
                priority={planeInfo.featured ? true : false}
                onClick={() => {
                  setData("gallery", item);
                  toggleModal("gallery");
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="aircraft-card__info">
        <div className="aircraft-card__title">
          <h3>
            <Link href="/aeronaves/[id]" as={`/aeronaves/${planeInfo.model}`}>
              {planeInfo.model}
            </Link>
          </h3>
        </div>
        <ul className="aircraft-card__list">{renderSpecsList()}</ul>
      </div>
    </div>
  );
};
