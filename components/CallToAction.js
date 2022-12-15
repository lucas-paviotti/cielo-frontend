import React from "react";
import { LinkButton } from "./LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";

export const CallToAction = () => {
  const { ref } = useParallax({ translateY: [-16, 0] });

  return (
    <section className="call-to-action">
      <div className="call-to-action-bg" ref={ref} />
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
        <LinkButton url="https://cirrusaircraft.com/">
          <span>Ir al sitio</span>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </LinkButton>
      </div>
    </section>
  );
};
