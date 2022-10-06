import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { GlobalContext } from "../context/GlobalContext";

export const ButtonGroupSocial = () => {
  const { socials, setIsOpen } = useContext(GlobalContext);

  return (
    <div className="button-group-social">
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Contactanos
      </button>
      {socials.facebook && (
        <a
          href={socials.facebook}
          target="_blank"
          className="btn-primary_social facebook"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </a>
      )}
      {socials.instagram && (
        <a
          href={socials.instagram}
          target="_blank"
          className="btn-primary_social instagram"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      )}
    </div>
  );
};
