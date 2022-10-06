import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { LinkListSubmenu } from "./LinkListSubmenu";
import { HeaderLinks } from "../data/HeaderLinksData";
import { GlobalContext } from "../context/GlobalContext";
import Link from "next/link";
import useResponsive from "../Hooks/useResponsive";

export const Header = () => {
  const { socials, setIsOpen } = useContext(GlobalContext);
  const { screenType } = useResponsive();
  const [transparent, setTransparent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(!menuOpen);
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
      className={`header ${transparent && !menuOpen ? "transparent" : ""}`}
    >
      <div className="container header__container">
        <div className="header__logo">
          <Link href="/">
            <a>
              {transparent && !menuOpen ? (
                <Image
                  src="/images/logo/logo-white.svg"
                  alt="Logo Cielo"
                  width={146}
                  height={32}
                />
              ) : (
                <Image
                  src="/images/logo/logo-deep-blue.svg"
                  alt="Logo Cielo"
                  width={146}
                  height={32}
                />
              )}
            </a>
          </Link>
        </div>
        <nav className={`header__nav ${menuOpen ? "isMenu" : ""}`}>
          <ul className="header__link-list">
            {HeaderLinks.map((headerLink, index) => {
              if (headerLink.links.length > 1) {
                return <LinkListSubmenu key={index} items={headerLink} />;
              } else {
                return (
                  <li className="header__link-list-item" key={index}>
                    <Link href={headerLink.links[0].to}>
                      <a onClick={menuToggleHandler}>
                        {headerLink.links[0].title}
                      </a>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
          {socials && (
            <div className="header__socials">
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="instagram"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              )}
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
              )}
              <FontAwesomeIcon
                icon={faEnvelope}
                onClick={() => setIsOpen(true)}
              ></FontAwesomeIcon>
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
