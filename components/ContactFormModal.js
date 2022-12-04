import { Modal } from "./Modal";
import { ContactForm } from "./Forms/ContactForm";
import { Close } from "./Icons/Close";
import useModal from "../hooks/useModal";

export const ContactFormModal = () => {
  const { isOpen, toggleModal } = useModal((state) => ({
    isOpen: state.modals.contact.isOpen,
    toggleModal: state.toggleModal,
  }));

  return (
    <Modal isOpen={isOpen} setIsOpen={() => toggleModal("contact")}>
      <div className="modal__header">
        <h3 className="modal__title">Contactanos</h3>
        <button
          className="modal__button modal__button--close"
          onClick={() => toggleModal("contact")}
          type="button"
        >
          <Close />
        </button>
      </div>
      <div className="modal__body">
        <ContactForm />
      </div>
    </Modal>
  );
};
