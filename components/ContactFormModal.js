import { Modal } from "./Modal";
import { ContactForm } from "./Forms/ContactForm";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Close } from "./Icons/Close";

export const ContactFormModal = () => {
  const { isOpen, setIsOpen } = useContext(GlobalContext);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="modal__header">
        <h3 className="modal__title">Contactanos</h3>
        <button
          className="modal__button modal__button--close"
          onClick={() => setIsOpen(false)}
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
