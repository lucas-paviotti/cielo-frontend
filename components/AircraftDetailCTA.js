import { RemainingUnits } from "./RemainingUnits";
import { formatValueToUsd } from "../utils/formatValue";
import useModal from "../hooks/useModal";

export const AircraftDetailCTA = ({ aircraft }) => {
  const { toggleModal, setData } = useModal((state) => ({
    toggleModal: state.toggleModal,
    setData: state.setData,
  }));

  const message = aircraft.used
    ? `Hola, estoy interesado en obtener más información sobre la aeronave ${aircraft.model} con matrícula ${aircraft.registration}. ¿Podrían contactarme para discutir detalles adicionales? Gracias.`
    : `Hola, estoy interesado en obtener más información sobre el ${aircraft.model} de ${aircraft.manufacturer}. ¿Podrían contactarme para discutir detalles adicionales? Gracias.`;

  return (
    <div className="aircraft-detail-cta">
      {aircraft.units ? <RemainingUnits aircraft={aircraft} /> : null}
      <div className="aircraft-detail-cta__price">
        {aircraft.price ? (
          <>
            <span>{aircraft.currency}</span>{" "}
            <span>{formatValueToUsd(aircraft.price)}</span>
          </>
        ) : (
          <span>Precio a consultar</span>
        )}
      </div>
      <button
        className="btn-primary aircraft-detail-cta__button"
        onClick={() => {
          setData("contact", {
            message: message,
            model: aircraft.model,
            registration: aircraft.registration,
          });
          toggleModal("contact");
        }}
      >
        Contactanos por esta aeronave
      </button>
    </div>
  );
};
