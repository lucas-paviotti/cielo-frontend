import { useRef, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Input/TextInput";
import { Textarea } from "./Input/Textarea";
import { useState } from "react";
import { ErrorMessage } from "./Input/ErrorMessage";
import { SuccessMessage } from "./Input/SuccessMessage";
import useModal from "../../hooks/useModal";
import ReCAPTCHA from "react-google-recaptcha";
import { SpinnerIcon } from "../Icons/SpinnerIcon";

export const ContactForm = ({ isOpen }) => {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const { data } = useModal((state) => ({
    data: state.modals.contact.data,
  }));

  const captchaRef = useRef(null);
  const formikRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      formikRef.current.resetForm();
      setIsSent(false);
      setError(null);
    }
  }, [isOpen]);

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        message: data?.message || "",
        model: data?.model || "",
        registration: data?.registration || "",
        token: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(
            /[a-zA-Z'¨äëïöüáéíóú ]+$/gm,
            "Este campo solo permite letras y espacios"
          )
          .required("Este campo es requerido"),
        phone: Yup.string().matches(
          /^[0-9]*$/gm,
          "El teléfono ingresado no es un número válido"
        ),
        email: Yup.string()
          .email("El email ingresado no es una dirección válida")
          .required("Este campo es requerido"),
        message: Yup.string().required("Este campo es requerido"),
        token: Yup.string().required(
          "Complete el Captcha para poder enviar su consulta"
        ),
      })}
      onSubmit={async (values, { resetForm }) => {
        const res = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res.status >= 400) {
          const data = await res.json();
          setError(data.error);
          setIsSent(false);
        } else {
          setError(null);
          setIsSent(true);
          captchaRef.current.reset();
          resetForm();
        }
      }}
      innerRef={formikRef}
      enableReinitialize
    >
      {({ isSubmitting, setFieldValue, errors, touched }) => (
        <Form className="contact-form" autoComplete="off">
          <TextInput
            label="Nombre*"
            name="name"
            type="text"
            disabled={isSubmitting}
          />
          <TextInput
            label="Teléfono"
            name="phone"
            type="tel"
            disabled={isSubmitting}
          />
          <TextInput
            label="E-mail*"
            name="email"
            type="email"
            disabled={isSubmitting}
          />
          <Textarea
            label="Mensaje*"
            name="message"
            cols="30"
            rows="5"
            disabled={isSubmitting}
          />
          <div className="contact-form__row captcha">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              ref={captchaRef}
              onChange={(e) => setFieldValue("token", e)}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem 0",
              }}
            />
            {touched.token && errors.token ? (
              <ErrorMessage text={errors.token} />
            ) : null}
          </div>
          {error ? <ErrorMessage text={error} /> : null}
          {isSent ? <SuccessMessage text="Mensaje enviado" /> : null}
          <div className="contact-form__row">
            <button
              type="submit"
              className="btn-primary contact-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? <SpinnerIcon /> : "Enviar"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
