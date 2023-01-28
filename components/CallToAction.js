import React from "react";
import { useParallax } from "react-scroll-parallax";
import Link from "next/link";
import { ArrowRight } from "./Icons/ArrowRight";

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
        <Link href="https://cirrusaircraft.com/" className="btn-primary-light">
          <span>Ir al sitio</span>
          <ArrowRight
            width="0.85rem"
            height="0.75rem"
            color="white"
            style={{ marginLeft: "0.5rem" }}
          />
        </Link>
      </div>
    </section>
  );
};
