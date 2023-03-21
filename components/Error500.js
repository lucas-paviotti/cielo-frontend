import React from "react";
import { LogoIcon } from "./Icons/LogoIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const Error500 = () => {
  const router = useRouter();

  return (
    <div className="not-found">
      <LogoIcon width={250} height={50} color={"#2f545e"} />
      <h1>500</h1>
      <h2>Error de servidor</h2>
      <p>Ha ocurrido un error inesperado en la aplicación.</p>
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

export default Error500;
