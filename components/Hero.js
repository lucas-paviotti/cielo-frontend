import { ButtonGroupSocial } from "./ButtonGroupSocial";
import Waves from "./Waves/Waves";

export const Hero = () => {
  return (
    <>
      <div className="hero-bg" />
      <section className="hero">
        <div className="container">
          <h1>Mantenimiento y venta de aeronaves</h1>
          <p>
            Único centro de servicio autorizado de <b>Cirrus Aircraft</b> para
            Argentina, Bolivia, Paraguay y Uruguay
          </p>
          <ButtonGroupSocial />
        </div>
        <Waves wave="Home" />
      </section>
    </>
  );
};
