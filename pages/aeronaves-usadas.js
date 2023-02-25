import Head from "next/head";
import { HeroBanner } from "../components/HeroBanner";
import { UsedAircraftCard } from "../components/UsedAircraftCard";
import { UsedAircraftGridContainer } from "../components/UsedAircraftGridContainer";
import { TitleWithLine } from "../components/TitleWithLine";
import { fetchAPI } from "../data/api";
import useModal from "../hooks/useModal";

export default function AeronavesUsadas({ aeronaves }) {
  const toggleModal = useModal((state) => state.toggleModal);

  return (
    <>
      <Head>
        <title>Aeronaves Usadas | Cielo S.A.</title>
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
        <div className="container">
          {aeronaves && aeronaves.length ? (
            <UsedAircraftGridContainer>
              {aeronaves.map((plane) => (
                <UsedAircraftCard key={plane.id} planeInfo={plane} />
              ))}
            </UsedAircraftGridContainer>
          ) : (
            <>
              <TitleWithLine
                title="En este momento no disponemos de aeronaves usadas a la venta."
                center
              />
              <p className="main-text center">
                Vuelva a intentar mas tarde o{" "}
                <button
                  className="btn-none"
                  onClick={() => toggleModal("contact")}
                >
                  <b>contáctenos</b>
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const aeronavesRes = await fetchAPI("/aeronaves", {
    sort: ["featured:desc", "manufacturer", "model"],
    filters: {
      used: {
        $eq: true,
      },
    },
    populate: {
      specs: "*",
      media: "*",
    },
    pagination: {
      pageSize: 9,
      page: 1,
    },
  });

  return {
    props: {
      aeronaves: aeronavesRes.data,
    },
  };
}
