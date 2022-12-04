import { Modal } from "./Modal";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Image from "next/image";
import { getStrapiMedia } from "../data/api";
import { Close } from "./Icons/Close";

export const GalleryModal = () => {
  const { isGalleryOpen, setIsGalleryOpen, currentImage } =
    useContext(GlobalContext);

  return (
    <Modal isOpen={isGalleryOpen} setIsOpen={setIsGalleryOpen}>
      <div className="modal__header">
        <h3 className="modal__title"></h3>
        <button
          className="modal__button modal__button--close"
          onClick={() => setIsGalleryOpen(false)}
          type="button"
        >
          =
          <Close />
        </button>
      </div>
      <div className="modal__body">
        {currentImage ? (
          <Image
            src={getStrapiMedia(currentImage)}
            alt={currentImage.attributes.alternativeText}
            width={currentImage.attributes.width}
            height={currentImage.attributes.height}
            className="modal__gallery-image"
          />
        ) : null}
      </div>
    </Modal>
  );
};
