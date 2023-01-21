import React from "react";
import Link from "next/link";

export const GridMenuItem = ({
  children,
  background,
  className,
  url,
  target = "_self",
  onClick,
}) => {
  const item = (
    <>
      <div
        className="grid-menu-item-background"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      {children}
    </>
  );

  if (url && target === "_self") {
    return (
      <Link
        href={url}
        className={`grid-menu-item ${className ? className : ""}`}
      >
        {item}
      </Link>
    );
  }

  if (url && target === "_blank") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`grid-menu-item ${className ? className : ""}`}
      >
        {item}
      </a>
    );
  }

  return (
    <div
      className={`grid-menu-item ${className ? className : ""}`}
      onClick={onClick ? onClick : null}
      style={{ cursor: onClick ? "pointer" : null }}
    >
      {item}
    </div>
  );
};
