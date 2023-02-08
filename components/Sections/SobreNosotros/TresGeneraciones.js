import Image from "next/image";
import Link from "next/link";
import { TitleWithLine } from "../../TitleWithLine";
import { ArrowRight } from "../../Icons/ArrowRight";
import { Blob4 } from "../../Blob";

const TresGeneraciones = () => {
  return (
    <div className="tres-generaciones">
      <TitleWithLine
        title={"Tres generaciones de experiencia en el mercado aeronáutico"}
        center
      />
      <div className="main-text__container">
        <p className="main-text">
          En <b>Cielo S.A.</b> contamos con las habilitaciones otorgadas por{" "}
          <b>ANAC</b> (Administración Nacional de Aviación Civil Argentina) para
          trabajar con una amplia gama de aeronaves, cumpliendo así con todas
          las normas y regulaciones emitidas por la dirección de
          aeronavegabilidad relativas a talleres aeronáuticos.
        </p>
        <div className="mask">
          <Image
            src={"/images/IMG_6431-min.jpeg"}
            width={524}
            height={326}
            alt="Interior de taller Cielo S.A."
          />
        </div>
        <p className="main-text">
          A su vez contamos con un gran equipo de profesionales certificados,
          constantemente asegurándonos de superar las expectativas y brindar el
          mejor servicio posible que usted merece como cliente.
        </p>
        <div className="blob">
          <Blob4 />
        </div>
      </div>
      <Link href="/habilitaciones" className="btn-primary shadow-none">
        <span>Ver habilitaciones</span>
        <ArrowRight
          width="0.85rem"
          height="0.75rem"
          color="white"
          style={{ marginLeft: "0.5rem" }}
        />
      </Link>
    </div>
  );
};

export default TresGeneraciones;
