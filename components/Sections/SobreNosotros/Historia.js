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
            <b>Cielo S.A.</b> es una empresa Argentina dedicada al mantenimiento
            y venta de aeronaves ubicada en el Aeropuerto Internacional de San
            Fernando.
          </p>
          <p className="main-text">
            Contamos con trés generaciones de experiencia al servicio del
            cliente. Iniciando las actividades aeronauticas con Atilio Paviotti
            en 1921, sucedido por su hijo Bruno Paviotti en la decada del 50 y
            hace más de 30 años con Marcelo Paviotti.
          </p>
          <p className="main-text">
            Con más de <b>40 años</b> en la industria, <b>Cielo S.A.</b> es el
            resultado del esfuerzo y la dedicación de trés líderes en el mercado
            aeronautico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historia;
