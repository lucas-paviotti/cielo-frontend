import FormData from "form-data";
import Mailgun from "mailgun.js";
import axios from "axios";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

async function sendEmail(req, res) {
  const { name, phone, email, message, model, registration, token } = req.body;

  const captchaRes = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  );

  if (!captchaRes.data.success) {
    throw new Error(
      "An error ocurred while sending this email. Please try again later."
    );
  }

  const subject = `Nueva consulta${
    registration ? ` | ${registration}` : model ? ` | ${model}` : ""
  }`;

  try {
    const mailRes = await mg.messages.create("noreply.cielosa.com.ar", {
      from: `${name} <notify@noreply.cielosa.com.ar>`,
      to: ["paviottilucas@gmail.com"],
      subject: subject,
      template: "consulta",
      "h:X-Mailgun-Variables": JSON.stringify({
        // be sure to stringify your payload
        name,
        phone,
        email,
        message,
        model,
        registration,
        subject,
      }),
      "h:Reply-To": email,
    });

    if (mailRes.status >= 400) {
      throw new Error(
        "An error ocurred while sending this email. Please try again later."
      );
    }

    return res.status(200).json(mailRes);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error.message);
  }
}

export default async function handler(req, res) {
  try {
    if (req.method === "POST") return sendEmail(req, res);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error:
        "An error ocurred while sending this email. Please try again later.",
    });
  }

  return res.status(500).json({
    error: "Method not allowed.",
  });
}
