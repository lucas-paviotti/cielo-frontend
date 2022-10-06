import { useContext } from "react";
import { GridMenuItem } from "./GridMenuItem";
import { LinkButton } from "./LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TextLink } from "./TextLink";
import { GlobalContext } from "../context/GlobalContext";

export const GridMenuContainer = () => {
  const { socials, setIsOpen } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="grid-menu-container">
        <GridMenuItem
          background="/images/grid/IMG_3418-min.jpg"
          className="grid-col-span-2 text-align-left"
        >
          <h2>Más de 40 años al servicio del cliente</h2>
          <p>
            CIELO S.A. es una empresa Argentina dedicada al Mantenimiento y
            Venta de Aeronaves ubicada en el Aeropuerto Internacional de San
            Fernando. A lo largo de más de 40 años en el mercado local ha
            obtenido alcances para realizar trabajos de una amplia gama de
            aviones, desde monomotores hasta modernos Jets ejecutivos.
          </p>
          <LinkButton url="https://cirrusaircraft.com/">
            <span>Seguir leyendo</span>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </LinkButton>
        </GridMenuItem>
        <GridMenuItem
          background="/images/grid/49f47f08-9fc2-4c27-8dc8-cb8f0e4a0b21-min.jpg"
          className="grid-col-span-2"
        >
          {socials.instagram && (
            <TextLink link={socials.instagram} target="_blank">
              <h3>Seguinos en nuestro Instagram</h3>
              <h2>Cirrus Aircraft Argentina</h2>
            </TextLink>
          )}
        </GridMenuItem>
        <GridMenuItem
          background="/images/grid/002.png"
          className="background-align-left"
        >
          <TextLink link="/aeronaves-en-venta">
            <h2>Aeronaves en venta</h2>
          </TextLink>
        </GridMenuItem>
        <GridMenuItem background="/images/grid/IMG_9715.jpg">
          <h2 onClick={() => setIsOpen(true)} className="text-link">
            Contactanos
          </h2>
        </GridMenuItem>
        <GridMenuItem
          background="/images/grid/IMG_2690-min.jpg"
          className="grid-col-span-2"
        >
          <TextLink link="/habilitaciones">
            <h2 style={{ padding: "0 1.2rem" }}>Habilitaciones</h2>
          </TextLink>
        </GridMenuItem>
      </div>
    </div>
  );
};
