import React from "react";

export const GridMenuItem = ({ children, background, className }) => {
  return (
    <div className={`grid-menu-item ${className}`}>
      <div
        className="grid-menu-item-background"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      {children}
    </div>
  );
};
