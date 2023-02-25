import CirrusBackground from "../../Waves/CirrusBackground";
import Image from "next/image";
import { TitleWithLine } from "../../TitleWithLine";
import { ArrowRight } from "../../Icons/ArrowRight";

const Representantes = () => {
  return (
    <div className="representantes">
      <div className="representantes__background">
        <CirrusBackground />
      </div>
      <div className="container representantes__content">
        <Image
          src={"/images/aircraft-hero-g2-vision-jet.png"}
          width={753}
          height={401}
          alt="Cirrus Vision Jet"
        />
        <TitleWithLine title={"Representantes oficiales de Cirrus Aircraft"} />
        <div className="main-text__container">
          <p className="main-text">
            Somos representantes oficiales de la empresa lider de ventas en el
            mercado aeronautico, <b>Cirrus Aircraft</b>, desde el año{" "}
            <b>2011</b> y a su vez el{" "}
            <b>único centro de ventas y servicio autorizado</b> para{" "}
            <b>Argentina, Bolivia, Paraguay, Uruguay y Chile</b>.
          </p>
        </div>
        <a
          href="https://cirrusaircraft.com/"
          target="_blank"
          rel="noreferrer"
          className="btn-dark shadow-none"
        >
          <span>Cirrus Aircraft</span>
          <ArrowRight
            width="0.85rem"
            height="0.75rem"
            color="white"
            style={{ marginLeft: "0.5rem" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Representantes;
