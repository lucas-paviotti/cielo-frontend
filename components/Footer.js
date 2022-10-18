import { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../context/GlobalContext";
import Link from "next/link";

export const Footer = () => {
  const { FooterLinks, SocialLinks } = useContext(GlobalContext);

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__logo-container">
          <span className="footer__logo">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo/logo-white.svg"
                  alt="Logo Cielo"
                  width={146}
                  height={32}
                />
              </a>
            </Link>
          </span>
        </div>
        <div className="footer__nav">
          <div className="footer__link-list-container">
            <span className="footer__link-list-header">Información</span>
            <ul className="footer__link-list">
              <li className="footer__link-list-item">
                <Link href="/sobre-nosotros">
                  <a>Sobre nosotros</a>
                </Link>
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
                <Link href="/habilitaciones">
                  <a>Habilitaciones</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__link-list-container">
            <span className="footer__link-list-header">
              Aeronaves a la venta
            </span>
            <ul className="footer__link-list">
              <li className="footer__link-list-item">
                <Link href="/aeronaves/cirrus-sr22t">
                  <a>Cirrus SR22T</a>
                </Link>
              </li>
              <li className="footer__link-list-item">
                <Link href="/aeronaves/cirrus-vision-jet">
                  <a>Cirrus Vision Jet</a>
                </Link>
              </li>
              <li className="footer__link-list-item">
                <Link href="/aeronaves/cirrus-sr22">
                  <a>Cirrus SR22</a>
                </Link>
              </li>
              <li className="footer__link-list-item">
                <Link href="/aeronaves/cirrus-sr20">
                  <a>Cirrus SR20</a>
                </Link>
              </li>
              <li className="footer__link-list-item">
                <Link href="/aeronaves-usadas">
                  <a>Aeronaves usadas</a>
                </Link>
              </li>
            </ul>
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
