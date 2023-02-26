import Head from "next/head";
import { HeroBanner } from "../components/HeroBanner";
import HabilitacionesVigentes from "../components/Sections/Habilitaciones/HabilitacionesVigentes";
import { fetchAPI } from "../data/api";

export default function habilitaciones({ habilitaciones }) {
  return (
    <>
      <Head>
        <title>Habilitaciones | Cielo S.A.</title>
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
        title="Habilitaciones"
        image="/images/gallery/IMG_0088-min.jpeg"
        wave="Habilitaciones"
      />
      <div className="wrapper">
        <div className="container">
          <HabilitacionesVigentes habilitaciones={habilitaciones.file.data} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetchAPI("/habilitacion", {
    populate: {
      file: "*",
    },
  });

  return {
    props: {
      habilitaciones: res.data.attributes,
    },
  };
}
