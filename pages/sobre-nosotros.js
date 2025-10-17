import Head from "next/head";
import { HeroBanner } from "../components/HeroBanner";
import Historia from "../components/Sections/SobreNosotros/Historia";
import Representantes from "../components/Sections/SobreNosotros/Representantes";
import TresGeneraciones from "../components/Sections/SobreNosotros/TresGeneraciones";
import Contactanos from "../components/Sections/Contactanos";
import { fetchAPI } from "../data/api";

export default function sobreNosotros({ data }) {
  return (
    <>
      <Head>
        <title>Sobre Nosotros | Cielo S.A.</title>
        <meta
          name="description"
          content="Único centro de ventas y servicio autorizado para Argentina, Chile, Paraguay y Uruguay."
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
        position="center top"
        wave="SobreNosotros"
      />
      <div className="wrapper">
        <div className="container">
          <Historia media={data.media.data} />
        </div>
        <Representantes />
        <div className="container">
          <TresGeneraciones />
          <Contactanos title={true} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetchAPI(`/sobre-nosotros-page`, {
    populate: {
      media: "*",
    },
  });

  return {
    props: {
      data: res.data.attributes,
    },
  };
}
