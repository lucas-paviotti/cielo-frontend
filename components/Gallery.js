import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import useModal from "../hooks/useModal";
import { Blob1, Blob2, Blob3 } from "./Blob";

export const Gallery = ({ images }) => {
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
          {images.map((item) => {
            return (
              <SwiperSlide key={item}>
                <Image
                  src={item}
                  alt=""
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  onClick={() => {
                    setData("gallery", item);
                    toggleModal("gallery");
                  }}
                />
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
