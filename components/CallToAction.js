import React from "react";
import { ButtonLink } from "./ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <h2>Cirrus Aircraft</h2>
        <p>
          Somos el único centro de servicio autorizado para Argentina, Bolivia,
          Paraguay y Uruguay. A su vez ofrecemos asesoramiento a la hora de
          adquirir su aeronave Cirrus.
        </p>
        <p>
          Si desea obtener mas información sobre la marca y sus aeronaves,
          visite su sitio web usando el siguiente enlace:
        </p>
        <ButtonLink
          link="https://cirrusaircraft.com/"
          target="_blank"
          text="Ir al sitio"
        >
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </ButtonLink>
      </div>
    </section>
  );
};
