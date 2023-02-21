import Image from "next/image";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getStrapiMedia } from "../data/api";
import Link from "next/link";
import { ArrowRight } from "./Icons/ArrowRight";
import useModal from "../hooks/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { formatValueToUsd } from "../utils/formatValue";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const UsedAircraftCard = ({ planeInfo }) => {
  const { toggleModal, setData } = useModal((state) => ({
    toggleModal: state.toggleModal,
    setData: state.setData,
  }));

  return (
    <div
      className={`used-aircraft-card ${planeInfo.featured ? "featured" : ""}`}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="used-aircraft-card__slider"
      >
        {planeInfo.media.data?.map((item) => {
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
                    planeInfo.featured || !item.attributes.formats
                      ? null
                      : item.attributes.formats.small
                      ? "small"
                      : item.attributes.formats[0]
                  )}
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
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="used-aircraft-card__info">
        <div className="used-aircraft-card__title">
          <h4>
            {planeInfo.manufacturer ? (
              <Link href="/aeronaves/[id]" as={`/aeronaves/${planeInfo.model}`}>
                {planeInfo.manufacturer}
              </Link>
            ) : null}
          </h4>
          <h3>
            <Link href="/aeronaves/[id]" as={`/aeronaves/${planeInfo.model}`}>
              {planeInfo.model}
            </Link>
          </h3>
        </div>
        <div className="used-aircraft-card__details">
          {planeInfo.year ? <span>{planeInfo.year}</span> : null}
          {planeInfo.registration ? (
            <span>{planeInfo.registration}</span>
          ) : null}
          {planeInfo.serial ? <span>{planeInfo.serial}</span> : null}
        </div>
        <div className="used-aircraft-card__price">
          {planeInfo.price ? (
            <>
              <span>{planeInfo.currency}</span>{" "}
              <span>{formatValueToUsd(planeInfo.price)}</span>
            </>
          ) : null}
        </div>
        <div className="used-aircraft-card__more">
          <Link href="/aeronaves/[id]" as={`/aeronaves/${planeInfo.model}`}>
            <>
              <span>Ver más</span>
              <ArrowRight />
            </>
          </Link>
        </div>
      </div>
    </div>
  );
};
