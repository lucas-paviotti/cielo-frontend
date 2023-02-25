import { TitleWithLine } from "../../TitleWithLine";
import { Gallery } from "../../Gallery";

const Historia = () => {
  return (
    <div className="historia">
      <TitleWithLine title="Nuestra historia" center />
      <div className="historia__container">
        <Gallery
          images={[
            "/images/gallery/IMG_0526-min.jpeg",
            "/images/gallery/IMG_0088-min.jpeg",
            "/images/gallery/IMG_4697-min.jpeg",
          ]}
        />
        <div className="main-text__container">
          <p className="main-text">
            <b>Cielo S.A.</b> es una empresa argentina dedicada a la venta y
            mantenimiento de aeronaves, ubicada en el{" "}
            <b>Aeropuerto Internacional de San Fernando.</b>
          </p>
          <p className="main-text">
            Fundada en 1921 por <b>Atilio Paviotti</b>, pionero de la industria
            aeronáutica en Argentina, liderada luego por su hijo{" "}
            <b>Bruno Paviotti</b> en la década del 50 y, actualmente, por{" "}
            <b>Marcelo Paviotti</b>, continuando con el legado y la tradición
            familiar de tres generaciones de experiencia al servicio del
            cliente.
          </p>
          <p className="main-text">
            Ofrecemos soluciones personalizadas y un servicio de calidad para
            garantizar la satisfacción de nuestros clientes, siempre
            comprometidos con la innovación y la excelencia en el mercado
            aeronáutico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historia;
