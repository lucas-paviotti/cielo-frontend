import React, { useEffect, useState } from "react";

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
              <a href={link.to}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
