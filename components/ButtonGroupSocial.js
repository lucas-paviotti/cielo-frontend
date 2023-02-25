import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { GlobalContext } from "../context/GlobalContext";
import useModal from "../hooks/useModal";

export const ButtonGroupSocial = () => {
  const { socialLinks } = useContext(GlobalContext);
  const toggleModal = useModal((state) => state.toggleModal);

  return (
    <div className="button-group-social">
      <button className="btn-primary" onClick={() => toggleModal("contact")}>
        Contactanos
      </button>
      {socialLinks.facebook && (
        <a
          href={socialLinks.facebook}
          target="_blank"
          className="btn-primary_social facebook"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </a>
      )}
      {socialLinks.instagram && (
        <a
          href={socialLinks.instagram}
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
