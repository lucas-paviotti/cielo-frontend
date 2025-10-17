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
          content="Único centro de ventas y servicio autorizado para Argentina, Chile, Paraguay y Uruguay."
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <Hero />
      <div className="wrapper" style={{ paddingTop: 0 }}>
        <GridMenuContainer />
        <CallToAction />
        <div className="container">
          <TitleWithLine title="Aeronaves a la venta" />
          {aeronaves && aeronaves.length ? (
            <AircraftGridContainer>
              {aeronaves.map((plane) => (
                <AircraftCard key={plane.id} planeInfo={plane} />
              ))}
              <AircraftCard />
            </AircraftGridContainer>
          ) : null}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const aeronavesRes = await fetchAPI("/aeronaves", {
    sort: ["featured:desc", "id:asc"],
    filters: {
      frontpage: {
        $eq: true,
      },
    },
    populate: {
      specs: "*",
      media: "*",
    },
  });

  return {
    props: {
      aeronaves: aeronavesRes.data,
    },
  };
}
