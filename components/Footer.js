import { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../context/GlobalContext";

export const Footer = () => {
  const { socials } = useContext(GlobalContext);

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__logo-container">
          <span className="footer__logo">
            <a href="/">
              <Image
                src="/images/logo/logo-white.svg"
                alt="Logo Cielo"
                width={146}
                height={32}
              />
            </a>
          </span>
        </div>
        <div className="footer__nav">
          <div className="footer__link-list-container">
            <span className="footer__link-list-header">Información</span>
            <ul className="footer__link-list">
              <li className="footer__link-list-item">
                <a href="/sobre-nosotros">Sobre nosotros</a>
              </li>
              <li className="footer__link-list-item">
                <a href="https://cirrusaircraft.com/">Cirrus Aircraft</a>
              </li>
              <li className="footer__link-list-item">
                <a href="/mantenimiento-y-habilitaciones">
                  Mantenimiento y habilitaciones
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__link-list-container">
            <span className="footer__link-list-header">
              Aeronaves a la venta
            </span>
            <ul className="footer__link-list">
              <li className="footer__link-list-item">
                <a href="/aeronaves/cirrus-sr22t">Cirrus SR22T</a>
              </li>
              <li className="footer__link-list-item">
                <a href="/aeronaves/cirrus-vision-jet">Cirrus Vision Jet</a>
              </li>
              <li className="footer__link-list-item">
                <a href="/aeronaves/cirrus-sr22">Cirrus SR22</a>
              </li>
              <li className="footer__link-list-item">
                <a href="/aeronaves/cirrus-sr20">Cirrus SR20</a>
              </li>
              <li className="footer__link-list-item">
                <a href="/aeronaves-usadas">Aeronaves usadas</a>
              </li>
            </ul>
          </div>
          {socials && (
            <div className="footer__link-list-container">
              <span className="footer__link-list-header">Contacto y redes</span>
              <ul className="footer__link-list">
                {socials.instagram && (
                  <li className="footer__link-list-item">
                    <a href={socials.instagram}>Seguinos en Instagram</a>
                  </li>
                )}
                {socials.facebook && (
                  <li className="footer__link-list-item">
                    <a href={socials.facebook}>Seguinos en Facebook</a>
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
