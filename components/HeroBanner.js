import Waves from "./Waves/Waves";
import Image from "next/image";

export const HeroBanner = ({ title, image }) => {
  return (
    <section className="hero-banner">
      <div className="hero-banner-bg">
        <Image
          src={image}
          alt=""
          fill
          objectFit="cover"
          objectPosition="center top"
        />
      </div>
      <h1>{title}</h1>
      <Waves wave="SobreNosotros" />
    </section>
  );
};
