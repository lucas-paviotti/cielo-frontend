import { ButtonGroupSocial } from "./ButtonGroupSocial";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Mantenimiento y venta de aeronaves</h1>
        <p>
          Único centro de servicio autorizado de <b>Cirrus Aircraft</b> para
          Argentina, Bolivia, Paraguay y Uruguay
        </p>
        <ButtonGroupSocial />
      </div>
    </section>
  );
};
