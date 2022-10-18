import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { GlobalContext } from "../context/GlobalContext";
import useResponsive from "../Hooks/useResponsive";
import { LinkListSubmenu } from "./LinkListSubmenu";
import { LogoIcon } from "./icon/LogoIcon";

export const Header = () => {
  const [transparent, setTransparent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { HeaderLinks, SocialLinks, setIsOpen } = useContext(GlobalContext);
  const { screenType } = useResponsive();
  const { route } = useRouter();

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
          <Link href="/">
            <a onClick={menuToggleHandler}>
              <LogoIcon
                width={146}
                height={32}
                color={transparent && route === "/" ? "#fff" : "#2f545e"}
              />
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
          {SocialLinks && (
            <div className="header__socials">
              {SocialLinks.instagram && (
                <a
                  href={SocialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="instagram"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              )}
              {SocialLinks.facebook && (
                <a
                  href={SocialLinks.facebook}
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
