import {
  Home,
  SobreNosotros,
  Habilitaciones,
  Contactanos,
  AeronavesUsadas,
} from "./Back";
import Middle from "./Middle";
import Front from "./Front";

const Waves = ({ wave }) => {
  const renderWave = () => {
    if (typeof wave === "string" || wave instanceof String) {
      switch (wave) {
        case "Home":
          return <Home />;
        case "SobreNosotros":
          return <SobreNosotros />;
        case "Habilitaciones":
          return <Habilitaciones />;
        case "Contactanos":
          return <Contactanos />;
        case "AeronavesUsadas":
          return <AeronavesUsadas />;
        default:
          return <></>;
      }
    }

    return wave;
  };

  return (
    <div className="wave-container">
      {renderWave()}
      <Middle />
      <Front />
    </div>
  );
};

export default Waves;
