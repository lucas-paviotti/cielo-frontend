import { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../context/GlobalContext";
import Link from "next/link";
import { AircraftLink } from "./AircraftLink";

export const Footer = () => {
  const { socialLinks, aircraftLinks } = useContext(GlobalContext);

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__logo-container">
          <span className="footer__logo">
            <Link href="/">
              <>
                <Image
                  src="/images/logo/logo-white.svg"
                  alt="Logo Cielo"
                  width={146}
                  height={32}
                />
              </>
            </Link>
          </span>
        </div>
        <div className="footer__nav">
          <div className="footer__link-list-container">
            <span className="footer__link-list-header">Información</span>
            <ul className="footer__link-list">
              <li className="footer__link-list-item">
                <Link href="/sobre-nosotros">Sobre nosotros</Link>
              </li>
              <li className="footer__link-list-item">
                <a
                  href="https://cirrusaircraft.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cirrus
                </a>
              </li>
              <li className="footer__link-list-item">
                <Link href="/habilitaciones">Habilitaciones</Link>
              </li>
            </ul>
          </div>
          <div className="footer__link-list-container">
            <span className="footer__link-list-header">
              Aeronaves a la venta
            </span>
            <ul className="footer__link-list">
              {aircraftLinks?.map((item) => (
                <li key={item.id} className="footer__link-list-item">
                  <AircraftLink item={item}>
                    {item.attributes.manufacturer.replace(" Aircraft", " ") +
                      item.attributes.model}
                  </AircraftLink>
                </li>
              ))}
              <li className="footer__link-list-item">
                <Link href="/aeronaves-usadas">Aeronaves usadas</Link>
              </li>
            </ul>
          </div>
          {socialLinks && (
            <div className="footer__link-list-container">
              <span className="footer__link-list-header">Contacto y redes</span>
              <ul className="footer__link-list">
                {socialLinks.instagram && (
                  <li className="footer__link-list-item">
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Seguinos en Instagram
                    </a>
                  </li>
                )}
                {socialLinks.facebook && (
                  <li className="footer__link-list-item">
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Seguinos en Facebook
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="footer__copyright">
        <span>© 2022 Cielo S.A. - Todos los derechos reservados</span>
      </div>
    </footer>
  );
};
