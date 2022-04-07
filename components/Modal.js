import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

export const Modal = ({title, openModal, toggleModal, children}) => {
  return (
    <>
      <div className={`modal ${openModal ? 'active' : ''}`}>
        <div className="modal__header">
          <h3>{title}</h3>
          <FontAwesomeIcon icon={faWindowClose} onClick={() => toggleModal(false)}></FontAwesomeIcon>
        </div>
        <div className="modal__body">
          {children}
        </div>
      </div>
      <div className={`modal__overlay ${openModal ? 'active' : ''}`} onClick={() => toggleModal(false)}></div>
    </>
  )
}
