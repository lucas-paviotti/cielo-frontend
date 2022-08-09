import React, { useState } from "react";
import Link from "next/link";

export const LinkListSubmenu = ({ items }) => {
  const [submenu, setSubmenu] = useState(false);

  const submenuOpen = () => {
    setSubmenu(!submenu);
  };

  const { name, links } = items;

  return (
    <li
      className="header__link-list-item"
      onClick={submenuOpen}
      onMouseEnter={submenuOpen}
      onMouseLeave={submenuOpen}
    >
      <span>{name}</span>
      <span className="header__link-list-item-space"></span>
      <ul
        className={`header__link-list-submenu ${submenu ? "open" : "closed"}`}
      >
        {links.map((link, index) => {
          return (
            <li className="header__link-list-subitem" key={index}>
              <Link href={link.to}>
                <a>{link.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
