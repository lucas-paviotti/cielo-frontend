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
            Único centro de ventas y servicio autorizado de <b>Cirrus</b> para
            Argentina, Chile, Paraguay y Uruguay
          </p>
          <ButtonGroupSocial />
        </div>
        <Waves wave="Home" />
      </section>
    </>
  );
};
