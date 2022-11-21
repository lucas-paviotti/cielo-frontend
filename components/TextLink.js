import React from "react";
import Link from "next/link";

export const TextLink = ({ link, target, children }) => {
  return (
    <>
      {target === "_blank" ? (
        <a href={link} target={target} className="text-link">
          {children}
        </a>
      ) : (
        <Link href={link} className="text-link">
          {children}
        </Link>
      )}
    </>
  );
};
