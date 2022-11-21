import Head from "next/head";
import { Hero } from "../components/Hero";
import { GridMenuContainer } from "../components/GridMenuContainer";
import { CallToAction } from "../components/CallToAction";
import { TitleWithLine } from "../components/TitleWithLine";
import { AircraftCard } from "../components/AircraftCard";
import { AircraftGridContainer } from "../components/AircraftGridContainer";
import { fetchAPI } from "../data/api";

export default function Home({ aeronaves }) {
  return (
    <>
      <Head>
        <title>Cielo S.A.</title>
        <meta
          name="description"
          content="Único centro de servicio autorizado de Cirrus Aircraft para Argentina, Bolivia, Paraguay y Uruguay."
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <Hero />
      <div className="container">
        <GridMenuContainer />
      </div>
      <CallToAction />
      <div className="container">
        <TitleWithLine title="Aeronaves a la venta" />
        <AircraftGridContainer>
          {aeronaves
            .sort(
              (a, b) =>
                Number(b.attributes.featured) - Number(a.attributes.featured)
            )
            .map((plane) => (
              <AircraftCard
                key={plane.id}
                id={plane.id}
                planeInfo={plane.attributes}
              />
            ))}
        </AircraftGridContainer>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const aeronavesRes = await fetchAPI("/aeronaves", {
    populate: {
      specs: "*",
      images: "*",
    },
  });

  return {
    props: {
      aeronaves: aeronavesRes.data,
    },
  };
}
