import Image from "next/image";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getStrapiMedia } from "../data/api";
import { ArrowRight } from "./Icons/ArrowRight";
import useModal from "../hooks/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { formatValueToUsd } from "../utils/formatValue";
import { AircraftLink } from "./AircraftLink";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const UsedAircraftCard = ({ planeInfo }) => {
  const { toggleModal, setData } = useModal((state) => ({
    toggleModal: state.toggleModal,
    setData: state.setData,
  }));

  return (
    <div
      className={`used-aircraft-card ${
        planeInfo.attributes.featured ? "featured" : ""
      }`}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="used-aircraft-card__slider"
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
                      : item.attributes.formats.small
                      ? "small"
                      : "thumbnail"
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
      <div className="used-aircraft-card__info">
        <div className="used-aircraft-card__title">
          <h4>
            {planeInfo.attributes.manufacturer ? (
              <AircraftLink item={planeInfo}>
                {planeInfo.attributes.manufacturer}
              </AircraftLink>
            ) : null}
          </h4>
          <h3>
            <AircraftLink item={planeInfo}>
              {planeInfo.attributes.model}
            </AircraftLink>
          </h3>
        </div>
        <div className="used-aircraft-card__details">
          {planeInfo.attributes.year ? (
            <span>{planeInfo.attributes.year}</span>
          ) : null}
          {planeInfo.attributes.registration ? (
            <span>{planeInfo.attributes.registration}</span>
          ) : null}
          {planeInfo.attributes.serial ? (
            <span>{planeInfo.attributes.serial}</span>
          ) : null}
        </div>
        <div className="used-aircraft-card__price">
          {planeInfo.attributes.price ? (
            <>
              <span>{planeInfo.attributes.currency}</span>{" "}
              <span>{formatValueToUsd(planeInfo.attributes.price)}</span>
            </>
          ) : (
            <span>A consultar</span>
          )}
        </div>
        <div className="used-aircraft-card__more">
          <AircraftLink item={planeInfo}>
            <>
              <span>Ver más</span>
              <ArrowRight />
            </>
          </AircraftLink>
        </div>
      </div>
    </div>
  );
};
