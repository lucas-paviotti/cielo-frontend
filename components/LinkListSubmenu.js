import React, { useState } from "react";
import Link from "next/link";
import { AircraftLink } from "./AircraftLink";

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
          {items?.map((item) => {
            return (
              <li className="header__link-list-subitem" key={item.id}>
                <AircraftLink item={item}>
                  {item.attributes.manufacturer.replace(" Aircraft", " ") +
                    item.attributes.model}
                </AircraftLink>
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
