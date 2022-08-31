import { HeadData } from "../components/Head";
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
      <HeadData title="Cielo S.A." description="Cielo S.A." />
      <Hero />
      <GridMenuContainer />
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
      details: "*",
      images: "*",
    },
  });

  return {
    props: {
      aeronaves: aeronavesRes.data,
    },
  };
}
