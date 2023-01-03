import Image from "next/image";
import { Modal } from "./Modal";
import { getStrapiMedia } from "../data/api";
import { Close } from "./Icons/Close";
import useModal from "../hooks/useModal";

export const GalleryModal = () => {
  const { isOpen, toggleModal, currentImage } = useModal((state) => ({
    isOpen: state.modals.gallery.isOpen,
    currentImage: state.modals.gallery.data,
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
        {currentImage ? (
          typeof currentImage === "string" ? (
            <Image
              src={currentImage}
              alt=""
              width={2016}
              height={1512}
              className="modal__gallery-image"
            />
          ) : (
            <Image
              src={getStrapiMedia(currentImage)}
              alt={currentImage.attributes.alternativeText}
              width={currentImage.attributes.width}
              height={currentImage.attributes.height}
              className="modal__gallery-image"
            />
          )
        ) : null}
      </div>
    </Modal>
  );
};
