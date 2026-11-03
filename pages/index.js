import { Meta } from "../components/Meta";
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
      <Meta title="Cielo S.A. | Mantenimiento y venta de aeronaves" />
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
