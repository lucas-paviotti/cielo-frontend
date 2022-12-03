import { useField } from "formik";
import { ErrorMessage } from "./ErrorMessage";

export const Textarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="contact-form__row">
      {label ? (
        <label
          htmlFor={props.name}
          className={`contact-form__label ${
            meta.touched && meta.error ? "error" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
      <textarea
        {...field}
        {...props}
        className={`contact-form__input ${
          meta.touched && meta.error ? "error" : ""
        }`}
      />
      {meta.touched && meta.error ? <ErrorMessage text={meta.error} /> : null}
    </div>
  );
};
