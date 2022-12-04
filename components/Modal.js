import { ReactPortal } from "./ReactPortal";

export const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={`modal ${isOpen ? "active" : ""}`}>
        <div className="modal__overlay" onClick={setIsOpen} />
        <div className="modal__content">{children}</div>
      </div>
    </ReactPortal>
  );
};
