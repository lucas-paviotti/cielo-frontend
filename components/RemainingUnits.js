import { useMemo } from "react";
import { Clock } from "./Icons/Clock";
import useModal from "../hooks/useModal";

export const RemainingUnits = ({ aircraft, text }) => {
  const { toggleModal, setData } = useModal((state) => ({
    toggleModal: state.toggleModal,
    setData: state.setData,
  }));

  const year = useMemo(() => new Date().getFullYear(), []);

  if (!aircraft.units) return null;

  return (
    <div className="ultimas-unidades">
      <Clock />
      {aircraft.units === 1 ? (
        <p>
          {text || (
            <>
              <b>Última unidad</b> disponible para {year}. ¡<b>Contactanos</b> y
              reservá la tuya!
            </>
          )}
        </p>
      ) : (
        <p>
          {text || (
            <>
              Últimas <b>{aircraft.units} unidades</b> disponibles para {year}.
              ¡
              <button
                className="btn-none"
                onClick={() => {
                  setData("contact", {
                    message: `Hola, estoy interesado en obtener más información sobre el ${aircraft.model} de ${aircraft.manufacturer}. ¿Podrían contactarme para discutir detalles adicionales? Gracias.`,
                    model: aircraft.model,
                  });
                  toggleModal("contact");
                }}
              >
                <b>Contactanos</b>
              </button>{" "}
              y reservá la tuya!
            </>
          )}
        </p>
      )}
    </div>
  );
};
