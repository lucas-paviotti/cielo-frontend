import Head from "next/head";
import { HeroBanner } from "../components/HeroBanner";
import Contactanos from "../components/Sections/Contactanos";

export default function contactanos() {
  return (
    <>
      <Head>
        <title>Contactanos | Cielo S.A.</title>
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
        title="Contactanos"
        image="/images/gallery/IMG_0526-min.jpeg"
        wave="Contactanos"
      />
      <div className="wrapper">
        <div className="container">
          <Contactanos title={false} />
        </div>
      </div>
    </>
  );
}
