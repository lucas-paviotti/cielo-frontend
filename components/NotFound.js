import React from "react";
import { LogoIcon } from "./Icons/LogoIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="not-found">
      <LogoIcon width={250} height={50} color={"#2f545e"} />
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe u ocurrió otro error.</p>
      <p>
        Vuelva a la{" "}
        <button className="btn-none" onClick={() => router.back()}>
          página anterior
        </button>{" "}
        o al <Link href="/">inicio</Link> para seguir navegando.
      </p>
    </div>
  );
};

export default NotFound;
