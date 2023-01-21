import { useContext } from "react";
import { GridMenuItem } from "./GridMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../context/GlobalContext";
import useModal from "../hooks/useModal";
import { useParallax } from "react-scroll-parallax";
import useResponsive from "../Hooks/useResponsive";
import Link from "next/link";
import { useRouter } from "next/router";

export const GridMenuContainer = () => {
  const { SocialLinks } = useContext(GlobalContext);
  const toggleModal = useModal((state) => state.toggleModal);
  const { screenType } = useResponsive();
  const { ref } = useParallax({
    translateY: [
      screenType === "DESKTOP" ? 2 : 0,
      screenType === "DESKTOP" ? -18 : 0,
    ],
  });
  const router = useRouter();

  return (
    <div className="container grid-menu-container">
      <div className="grid-menu" ref={ref}>
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
          <Link href="/sobre-nosotros" className="btn-primary">
            <span>Seguir leyendo</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </GridMenuItem>
        {SocialLinks.instagram ? (
          <GridMenuItem
            background="/images/grid/49f47f08-9fc2-4c27-8dc8-cb8f0e4a0b21-min.jpg"
            className="grid-col-span-2"
            url={SocialLinks.instagram}
            target="_blank"
          >
            <div className="text-link">
              <h3>Seguinos en nuestro Instagram</h3>
              <h2>Cirrus Aircraft Argentina</h2>
            </div>
          </GridMenuItem>
        ) : null}
        <GridMenuItem
          background="/images/grid/002.png"
          className="background-align-left"
          url="/aeronaves-usadas"
        >
          <h2 className="text-link">Aeronaves en venta</h2>
        </GridMenuItem>
        <GridMenuItem
          background="/images/grid/IMG_9715.jpg"
          onClick={() => toggleModal("contact")}
        >
          <h2 className="text-link">Contactanos</h2>
        </GridMenuItem>
        <GridMenuItem
          background="/images/grid/IMG_2690-min.jpg"
          className="grid-col-span-2"
          url="/habilitaciones"
        >
          <h2 className="text-link">Habilitaciones</h2>
        </GridMenuItem>
      </div>
    </div>
  );
};
