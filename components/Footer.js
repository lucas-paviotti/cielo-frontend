import { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../context/GlobalContext";
import Link from "next/link";

export const Footer = ({ subLinks }) => {
  const { SocialLinks } = useContext(GlobalContext);

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
                  Cirrus Aircraft
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
            {/* <ul className="footer__link-list">
              {subLinks.map((item) => {
                <li className="footer__link-list-item">
                  <Link href={`/aeronaves/{}`}>Cirrus SR22T</Link>
                </li>;
              })}
              <li className="footer__link-list-item">
                <Link href="/aeronaves-usadas">Aeronaves usadas</Link>
              </li>
            </ul> */}
          </div>
          {SocialLinks && (
            <div className="footer__link-list-container">
              <span className="footer__link-list-header">Contacto y redes</span>
              <ul className="footer__link-list">
                {SocialLinks.instagram && (
                  <li className="footer__link-list-item">
                    <a
                      href={SocialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Seguinos en Instagram
                    </a>
                  </li>
                )}
                {SocialLinks.facebook && (
                  <li className="footer__link-list-item">
                    <a
                      href={SocialLinks.facebook}
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
