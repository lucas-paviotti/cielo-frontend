import { Meta } from "../components/Meta";
import { HeroBanner } from "../components/HeroBanner";
import HabilitacionesVigentes from "../components/Sections/Habilitaciones/HabilitacionesVigentes";
import { fetchAPI } from "../data/api";

export default function habilitaciones({ habilitaciones }) {
  return (
    <>
      <Meta title="Habilitaciones | Cielo S.A." />
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
