import React from 'react';
import { GridMenuItem } from './GridMenuItem';
import { ButtonLink } from './ButtonLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const GridMenuContainer = () => {
  return (
    <div className="container">
      <div className="grid-menu-container">
        <GridMenuItem background="/images/grid/IMG_3418-min.jpg" className='grid-col-span-2 text-align-left'>
          <h2>Más de 40 años al servicio del cliente</h2>
          <p>CIELO S.A. es una empresa Argentina dedicada al Mantenimiento y Venta de Aeronaves ubicada en el Aeropuerto Internacional de San Fernando. A lo largo de más de 40 años en el mercado local ha obtenido alcances para realizar trabajos de una amplia gama de aviones, desde monomotores hasta modernos Jets ejecutivos.</p>
          <ButtonLink link="gog" target="_blank" text="Seguir leyendo">
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </ButtonLink>
        </GridMenuItem>
        <GridMenuItem background="/images/grid/49f47f08-9fc2-4c27-8dc8-cb8f0e4a0b21-min.jpg" className='grid-col-span-2'>
          <h3>Seguinos en nuestro Instagram</h3>
          <h2>Cirrus Aircraft Argentina</h2>
        </GridMenuItem>
        <GridMenuItem background="/images/grid/002.jpg" className='background-align-left'>
          <h2>Aeronaves en venta</h2>
        </GridMenuItem>
        <GridMenuItem background="/images/grid/IMG_9715.jpg">
          <h2>Contactanos</h2>
        </GridMenuItem>
        <GridMenuItem background="/images/grid/IMG_2690-min.jpg" className='grid-col-span-2'>
          <h2 style={{padding: '0 1.2rem'}}>Mantenimiento y habilitaciones</h2>
        </GridMenuItem>
      </div>
    </div>
  );
};
