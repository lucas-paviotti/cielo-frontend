import Head from "next/head";
import { HeroBanner } from "../components/HeroBanner";
import Contactanos from "../components/Sections/Contactanos";

export default function contactanos() {
  return (
    <>
      <Head>
        <title>Cielo S.A. - Aeronaves Usadas</title>
        <meta
          name="description"
          content="Único centro de ventas y servicio autorizado para Argentina, Bolivia, Paraguay, Uruguay y Chile."
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <HeroBanner
        title="Aeronaves Usadas"
        image="/images/gallery/IMG_4697-min.jpeg"
        position="center"
        wave="AeronavesUsadas"
      />
      <div className="wrapper">
        <div className="container"></div>
      </div>
    </>
  );
}
