import React from "react";

export const ButtonLink = ({ link, target, text, children }) => {
  return (
    <a href={link} target={target} className="btn-primary">
      {text}
      {children}
    </a>
  );
};
