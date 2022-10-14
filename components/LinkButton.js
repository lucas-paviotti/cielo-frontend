import React from "react";
import Link from "next/link";

export const LinkButton = ({ url, children }) => {
  return (
    <Link href={url}>
      <a className="btn-primary">
        {children}
      </a>
    </Link>
  );
};