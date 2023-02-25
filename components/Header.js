import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { GlobalContext } from "../context/GlobalContext";
import useResponsive from "../Hooks/useResponsive";
import { LinkListSubmenu } from "./LinkListSubmenu";
import { LogoIcon } from "./Icons/LogoIcon";
import useModal from "../hooks/useModal";

export const Header = () => {
  const [transparent, setTransparent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { socialLinks, aircraftLinks } = useContext(GlobalContext);
  const { screenType } = useResponsive();
  const { route } = useRouter();
  const toggleModal = useModal((state) => state.toggleModal);

  useEffect(() => {
    if (screenType === "DESKTOP") {
      setMenuOpen(false);
    }
  }, [screenType]);

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundHandler);
    return () => window.removeEventListener("scroll", changeBackgroundHandler);
  }, []);

  const menuToggleHandler = () => {
    if (screenType === "MOBILE") {
      setMenuOpen(!menuOpen);
    }
  };

  const changeBackgroundHandler = () => {
    if (window.scrollY == 0) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  };

  return (
    <header
      className={`header ${transparent && route === "/" ? "transparent" : ""}`}
    >
      <div className="container header__container">
        <div className="header__logo">
          <Link href="/" onClick={menuToggleHandler}>
            <>
              <LogoIcon
                width={146}
                height={32}
                color={transparent && route === "/" ? "#fff" : "#2f545e"}
              />
            </>
          </Link>
        </div>
        <nav className={`header__nav ${menuOpen ? "isMenu" : ""}`}>
          <ul className="header__link-list">
            <li className="header__link-list-item">
              <Link href="/sobre-nosotros" onClick={menuToggleHandler}>
                Sobre Nosotros
              </Link>
            </li>
            <LinkListSubmenu name="Aeronaves" items={aircraftLinks} />
            <li className="header__link-list-item">
              <Link href="/habilitaciones" onClick={menuToggleHandler}>
                Habilitaciones
              </Link>
            </li>
            <li className="header__link-list-item">
              <Link href="/contactanos" onClick={menuToggleHandler}>
                Contactanos
              </Link>
            </li>
          </ul>
          {socialLinks && (
            <div className="header__socials">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              )}
              <FontAwesomeIcon
                icon={faEnvelope}
                onClick={() => toggleModal("contact")}
              />
            </div>
          )}
        </nav>
        <div className={`header__toggle ${menuOpen ? "open" : "closed"}`}>
          <button onClick={menuToggleHandler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
