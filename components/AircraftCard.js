import Image from "next/image";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getStrapiMedia } from "../data/api";
import Link from "next/link";
import { ArrowRight } from "./Icons/ArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { AircraftLink } from "./AircraftLink";
import { RemainingUnits } from "./RemainingUnits";
import useModal from "../hooks/useModal";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const AircraftCard = ({ planeInfo }) => {
  const { toggleModal, setData } = useModal((state) => ({
    toggleModal: state.toggleModal,
    setData: state.setData,
  }));

  const renderSpecsList = () => {
    if (planeInfo.attributes.featured == true) {
      return (
        <>
          <ul className="aircraft-card__list">
            {planeInfo.attributes.specs.slice(0, 5).map((item) => {
              return (
                <li className="aircraft-card__list-item" key={item.id}>
                  <span>{item.value}</span>
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
          <div className="aircraft-card__list-item--more">
            <AircraftLink item={planeInfo}>
              <>
                <span>Ver más</span>
                <ArrowRight />
              </>
            </AircraftLink>
          </div>
        </>
      );
    } else {
      return (
        <div className="aircraft-card__list-item--more">
          <AircraftLink item={planeInfo}>
            <>
              <span>Ver más</span>
              <ArrowRight />
            </>
          </AircraftLink>
        </div>
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
        <div className="aircraft-card__list-item--more">
          <Link href="/aeronaves/aeronaves-usadas">
            <>
              <span>Ver más</span>
              <ArrowRight />
            </>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`aircraft-card ${
        planeInfo.attributes.featured ? "featured" : ""
      }`}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="aircraft-card__slider"
      >
        {planeInfo.attributes.media.data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {item.attributes.ext === ".mp4" ||
              item.attributes.ext === ".mov" ? (
                <>
                  <ReactPlayer
                    url={getStrapiMedia(item)}
                    width="auto"
                    height="100%"
                    style={{ display: "flex", justifyContent: "center" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setData("gallery", item);
                      toggleModal("gallery");
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="thumbnail-icon"
                  />
                </>
              ) : (
                <Image
                  src={getStrapiMedia(
                    item,
                    planeInfo.attributes.featured || !item.attributes.formats
                      ? null
                      : item.attributes.formats.medium
                      ? "medium"
                      : "small"
                  )}
                  alt=""
                  fill={true}
                  sizes="100vw, (min-width: 992px) 465px, (min-width: 1280px) 555px"
                  style={{ objectFit: "cover" }}
                  priority={planeInfo.attributes.featured ? true : false}
                  onClick={() => {
                    setData("gallery", item);
                    toggleModal("gallery");
                  }}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="aircraft-card__info">
        <div className="aircraft-card__title">
          <RemainingUnits aircraft={planeInfo.attributes} />
          {planeInfo.attributes.manufacturer ? (
            <h4>{planeInfo.attributes.manufacturer}</h4>
          ) : null}
          <h3>
            <AircraftLink item={planeInfo}>
              {planeInfo.attributes.model}
            </AircraftLink>
          </h3>
        </div>
        {renderSpecsList()}
      </div>
    </div>
  );
};
