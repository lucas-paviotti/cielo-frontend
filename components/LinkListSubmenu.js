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
      onMouseEnter={submenuOpen}
      onMouseLeave={submenuOpen}
    >
      <span>{name}</span>
      <div className="header__link-list-container">
        <ul
          className={`header__link-list-submenu ${submenu ? "open" : "closed"}`}
        >
          {links.map((link, index) => {
            return (
              <li className="header__link-list-subitem" key={index}>
                <Link href={link.to}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};
