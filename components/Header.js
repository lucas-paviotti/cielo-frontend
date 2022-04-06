import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { LinkListSubmenu } from './LinkListSubmenu';
import { HeaderLinks } from '../data/HeaderLinksData';

export const Header = ({socials, toggleModal}) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [transparent, setTransparent] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    }, []);

    const menuToggleHandler = () => {
        setMenuOpen(!menuOpen);
    };

    const changeBackground = () => {
        if (window.scrollY == 0) {
            setTransparent(true)
        } else {
            setTransparent(false)
        }
    }

    return (
        <header className={`header ${transparent && !menuOpen ? 'transparent' : ''}`}>
            <div className='container header__container'>
                <div className='header__logo'>
                    <a href="/">
                        {transparent && !menuOpen
                            ? <Image src="/images/logo/logo-white.svg" alt="Logo Cielo" width={146} height={32} />
                            : <Image src="/images/logo/logo-deep-blue.svg" alt="Logo Cielo" width={146} height={32} />
                        }
                    </a>
                </div>
                <nav className={`header__nav ${menuOpen ? 'isMenu' : ''}`}>
                    <ul className='header__link-list'>
                        {HeaderLinks.map((headerLink, index) => {
                            if (headerLink.links.length > 1) {
                                return <LinkListSubmenu key={index} items={headerLink} />;
                            } else {
                                return <li className='header__link-list-item' key={index}><a href={headerLink.links[0].to} onClick={menuToggleHandler}>{headerLink.links[0].title}</a></li>;
                            }
                        })}
                    </ul>
                    {socials &&
                        <div className="header__socials">
                            {socials.instagram && <a href={socials.instagram} target="_blank" className='instagram'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>}
                            {socials.facebook && <a href={socials.facebook} target="_blank" className='facebook'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>}
                            <FontAwesomeIcon icon={faEnvelope} onClick={() => toggleModal(true)}></FontAwesomeIcon>
                        </div>
                    }
                </nav>
                <div className={`header__toggle ${menuOpen ? 'open' : 'closed'}`}>
                    <button onClick={menuToggleHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
