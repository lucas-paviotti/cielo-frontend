import Image from "next/image";
import dynamic from "next/dynamic";
import { Modal } from "./Modal";
import { getStrapiMedia } from "../data/api";
import { Close } from "./Icons/Close";
import useModal from "../hooks/useModal";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const GalleryModal = () => {
  const { isOpen, toggleModal, currentMedia } = useModal((state) => ({
    isOpen: state.modals.gallery.isOpen,
    currentMedia: state.modals.gallery.data,
    toggleModal: state.toggleModal,
  }));

  return (
    <Modal isOpen={isOpen} setIsOpen={() => toggleModal("gallery")}>
      <div className="modal__header">
        <h3 className="modal__title"></h3>
        <button
          className="modal__button modal__button--close"
          onClick={() => toggleModal("gallery")}
          type="button"
        >
          <Close />
        </button>
      </div>
      <div className="modal__body">
        {currentMedia ? (
          typeof currentMedia === "string" ? (
            <Image
              src={currentMedia}
              alt=""
              width={2016}
              height={1512}
              className="modal__gallery-image"
              loading="eager"
            />
          ) : currentMedia.attributes.ext === ".mp4" ||
            currentMedia.attributes.ext === ".mov" ? (
            <ReactPlayer
              url={getStrapiMedia(currentMedia)}
              width="100%"
              height="100%"
              controls={true}
            />
          ) : (
            <Image
              src={getStrapiMedia(currentMedia)}
              alt={currentMedia.attributes.alternativeText || ""}
              width={currentMedia.attributes.width}
              height={currentMedia.attributes.height}
              className="modal__gallery-image"
              loading="eager"
            />
          )
        ) : null}
      </div>
    </Modal>
  );
};
