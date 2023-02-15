import Waves from "./Waves/Waves";
import Image from "next/image";

export const HeroBanner = ({ title, image, position, wave }) => {
  return (
    <section className="hero-banner">
      <div className="hero-banner-bg">
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: position || "center" }}
        />
      </div>
      <h1>{title}</h1>
      <Waves wave={wave} />
    </section>
  );
};
