import { Meta } from "../components/Meta";
import { HeroBanner } from "../components/HeroBanner";
import Historia from "../components/Sections/SobreNosotros/Historia";
import Representantes from "../components/Sections/SobreNosotros/Representantes";
import TresGeneraciones from "../components/Sections/SobreNosotros/TresGeneraciones";
import Contactanos from "../components/Sections/Contactanos";
import { fetchAPI } from "../data/api";

export default function sobreNosotros({ data }) {
  return (
    <>
      <Meta title="Sobre Nosotros | Cielo S.A." />
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
