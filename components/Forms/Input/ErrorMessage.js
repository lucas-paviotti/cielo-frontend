import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ErrorMessage = ({ text }) => {
  return (
    <div className="contact-form__error">
      <FontAwesomeIcon icon={faExclamationCircle} />
      <span>{text}</span>
    </div>
  );
};
