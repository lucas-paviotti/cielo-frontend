import Image from "next/image";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import useModal from "../hooks/useModal";
import { Blob1, Blob2, Blob3 } from "./Blob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { getStrapiMedia } from "../data/api";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const Gallery = ({ media }) => {
  const { toggleModal, setData } = useModal((state) => ({
    toggleModal: state.toggleModal,
    setData: state.setData,
  }));

  return (
    <div className="gallery__wrapper">
      <div className="gallery">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: false,
          }}
          pagination={{ clickable: true }}
          className="gallery__slider"
        >
          {media.map((item) => {
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
                      (item.attributes.formats.large && "large") ||
                        (item.attributes.formats.medium && "medium") ||
                        (item.attributes.formats.small && "small") ||
                        "thumbnail"
                    )}
                    alt=""
                    sizes="100vw, (min-width: 992px) 576px, (min-width: 1280px) 684px"
                    fill={true}
                    style={{ objectFit: "cover", objectPosition: "center" }}
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
      </div>
      <div className="blob blob-1">
        <Blob1 />
      </div>
      <div className="blob blob-2">
        <Blob2 />
      </div>
      <div className="blob blob-3">
        <Blob3 />
      </div>
    </div>
  );
};
