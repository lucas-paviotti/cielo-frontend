import React, { useEffect, useState } from "react";

export const LinkListSubmenu = ({items}) => {

    const [submenu, setSubmenu] = useState(false);

    const submenuOpen = () => {
        setSubmenu(!submenu);
    };

    const { name, links } = items;

    return (
        <li className='header__link-list-item'>
            <span onClick={submenuOpen}>{name}</span>
            <ul className={`header__link-list-submenu ${submenu ? 'open' : 'closed'}`}>
                {links.map((link, index) => {
                    return <li className="header__link-list-subitem" key={index}><a href={link.to}>{link.title}</a></li>;
                })}
            </ul>
        </li>
    )
}
