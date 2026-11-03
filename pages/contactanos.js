import { Meta } from "../components/Meta";
import { HeroBanner } from "../components/HeroBanner";
import Contactanos from "../components/Sections/Contactanos";

export default function contactanos() {
  return (
    <>
      <Meta title="Contactanos | Cielo S.A." />
      <HeroBanner
        title="Contactanos"
        image="/images/gallery/IMG_0526-min.jpeg"
        wave="Contactanos"
      />
      <div className="wrapper">
        <div className="container">
          <Contactanos title={false} />
        </div>
      </div>
    </>
  );
}
