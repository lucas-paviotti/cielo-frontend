import React, { useState } from "react";
import Link from "next/link";

export const LinkListSubmenu = ({ name, items }) => {
  const [submenu, setSubmenu] = useState(false);

  const submenuOpen = () => {
    setSubmenu(!submenu);
  };

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
          {items?.map((item, index) => {
            return (
              <li className="header__link-list-subitem" key={item.id}>
                <Link
                  href={`/aeronaves/${item.id}`}
                  as={`/aeronaves/${item.attributes.model}`}
                >
                  {item.attributes.model}
                </Link>
              </li>
            );
          })}
          <li className="header__link-list-subitem">
            <Link href={`/aeronaves-usadas`}>Aeronaves Usadas</Link>
          </li>
        </ul>
      </div>
    </li>
  );
};
