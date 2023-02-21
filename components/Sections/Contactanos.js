import { TitleWithLine } from "../TitleWithLine";
import Map from "../Map";
import { MapPin } from "../Icons/MapPin";
import { Phone } from "../Icons/Phone";
import { Envelope } from "../Icons/Envelope";
import useModal from "../../hooks/useModal";

const Contactanos = ({ title }) => {
  const toggleModal = useModal((state) => state.toggleModal);

  return (
    <div className="contactanos">
      {title ? <TitleWithLine title="Contactanos" center /> : null}
      <Map />
      <div className="contactanos__content">
        <div className="contactanos__item">
          <div className="contactanos__item-icon">
            <MapPin />
          </div>
          <p className="main-text">
            Av. Hipólito Yrigoyen 4502, San Fernando, Provincia de Buenos Aires
          </p>
          <p className="main-text">
            (Aeropuerto Internacional de San Fernando)
          </p>
        </div>
        <div className="separator" />
        <div className="contactanos__item">
          <div className="contactanos__item-icon">
            <Phone />
          </div>
          <p className="main-text">
            <a href="tel:47142002">(+54 11) 4714-2002</a>
          </p>
        </div>
        <div className="separator" />
        <div className="contactanos__item">
          <div className="contactanos__item-icon">
            <Envelope />
          </div>
          <p className="main-text">
            Contactanos a través de nuestro{" "}
            <button className="btn-none" onClick={() => toggleModal("contact")}>
              <b>formulario</b>
            </button>{" "}
            o escribiendo a{" "}
            <a href="mailto:secretaría@cielosa.com.ar">
              <b>secretaría@cielosa.com.ar</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
