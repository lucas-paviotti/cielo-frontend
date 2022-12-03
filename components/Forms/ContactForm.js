import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Input/TextInput";
import { Textarea } from "./Input/Textarea";
import { useState } from "react";
import { ErrorMessage } from "./Input/ErrorMessage";
import { SuccessMessage } from "./Input/SuccessMessage";

export const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        message: "",
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
      })}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        //sendEmail();
        /* const res: Response = await fetch("/api/ SET API ROUTE HERE ", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNumber: values.phoneNumber,
            homeAddress: values.homeAddress,
            taxID: values.taxID,
          }),
        });

        if (res.status >= 400) {
          const data: { error: string } = await res.json();
          setError(data.error);
          setIsSent(false);
        } else {
          setError(null);
          setIsSent(true);
        } */

        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="contact-form">
          <TextInput label="Nombre*" name="name" type="text" required />
          <TextInput label="Teléfono" name="phone" type="tel" />
          <TextInput label="E-mail*" name="email" type="email" required />
          <Textarea
            label="Mensaje*"
            name="message"
            cols="30"
            rows="10"
            required
          />
          {error ? <ErrorMessage text={error} /> : null}
          {isSent ? <SuccessMessage text="Mensaje enviado" /> : null}
          <div className="contact-form__row">
            <button
              type="submit"
              className="btn-primary contact-form__submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
