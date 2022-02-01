import React from 'react';
import { ButtonLink } from './ButtonLink';
import { ButtonGroupSocial } from './ButtonGroupSocial';

export const Hero = () => {
  return (
    <section className='hero'>
      <div className="container">
        <h1>Mantenimiento y venta de aeronaves</h1>
        <p>Único centro de servicio autorizado de <b>Cirrus Aircraft</b> para Argentina, Bolivia, Paraguay y Uruguay</p>
        <ButtonGroupSocial link='https://www.google.com/' facebook='https://www.facebook.com/CirrusAircraftArgentina/' instagram='https://www.instagram.com/cirrusaircraftargentina/'></ButtonGroupSocial>
      </div>
    </section>
  );
};
