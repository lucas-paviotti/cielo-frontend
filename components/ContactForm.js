import React from 'react';

export const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact-form__row">
        <label htmlFor="nombre" className="contact-form__label">Nombre</label>
        <input name="nombre" type="text" autoComplete="nombre" required id="nombre" className="contact-form__input"/>
      </div>
      <div className="contact-form__row">
        <label htmlFor="telefono" className="contact-form__label">Telefono</label>
        <input name="telefono" type="text" autoComplete="telefono" id="telefono" className="contact-form__input"/>
      </div>
      <div className="contact-form__row">
        <label htmlFor="email" className="contact-form__label">E-mail</label>
        <input name="email" type="email" autoComplete="email" required id="email" className="contact-form__input"/>
      </div>
      <div className="contact-form__row">
        <label htmlFor="mensaje" className="contact-form__label">Mensaje</label>
        <textarea name="mensaje" cols="30" rows="10" required id="mensaje" className="contact-form__input"></textarea>
      </div>
      <div className="contact-form__row">
        <button type="submit" className="btn-primary contact-form__submit">Enviar</button>
      </div>
    </form>
  );
};
