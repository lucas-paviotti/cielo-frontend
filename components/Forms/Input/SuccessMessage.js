import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SuccessMessage = ({ text }) => {
  return (
    <div className="contact-form__success">
      <FontAwesomeIcon icon={faCheckCircle} />
      <span>{text}</span>
    </div>
  );
};
