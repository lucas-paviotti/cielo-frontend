import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { GlobalContext } from "../context/GlobalContext";

export const ButtonGroupSocial = () => {
  const { SocialLinks, setIsOpen } = useContext(GlobalContext);

  return (
    <div className="button-group-social">
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Contactanos
      </button>
      {SocialLinks.facebook && (
        <a
          href={SocialLinks.facebook}
          target="_blank"
          className="btn-primary_social facebook"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </a>
      )}
      {SocialLinks.instagram && (
        <a
          href={SocialLinks.instagram}
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
