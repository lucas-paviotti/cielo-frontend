import { TitleWithLine } from "../../TitleWithLine";
import { ArrowRight } from "../../Icons/ArrowRight";

const HabilitacionesVigentes = ({ habilitaciones }) => {
  return (
    <div className="habilitaciones-vigentes">
      <TitleWithLine
        title="Habilitaciones vigentes para República Argentina - Habilitación ANAC 1B-30"
        center
      />
      <p className="main-text">
        En <b>Cielo S.A.</b> contamos con las habilitaciones otorgadas por ANAC
        (Administración Nacional de Aviación Civil Argentina) para trabajar con
        una amplia gama de aeronaves, cumpliendo así con todas las normas y
        regulaciones emitidas por la dirección de aeronavegabilidad relativas a
        talleres aeronáuticos.
      </p>
      <a
        href={process.env.REACT_APP_STRAPI_URL + habilitaciones.attributes.url}
        className="btn-primary"
        download
      >
        <span>Descargar planilla de habilitaciones</span>
        <ArrowRight
          width="0.85rem"
          height="0.75rem"
          color="white"
          style={{ marginLeft: "0.5rem" }}
        />
      </a>
    </div>
  );
};

export default HabilitacionesVigentes;
