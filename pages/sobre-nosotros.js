import Head from "next/head";
import { HeroBanner } from "../components/HeroBanner";

export default function sobreNosotros() {
  return (
    <>
      <Head>
        <title>Cielo S.A. - Sobre Nosotros</title>
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
        title="Mantenimiento y venta de aeronaves en San Fernando"
        image="/images/banner/sobre-nosotros.jpg"
      />
      <div className="wrapper">
        <div className="container"></div>
      </div>
    </>
  );
}
