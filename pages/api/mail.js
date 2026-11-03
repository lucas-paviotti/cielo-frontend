import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

const GENERIC_ERROR =
  "An error ocurred while sending this email. Please try again later.";

async function verifyCaptcha(token) {
  if (!token) return false;

  const captchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    }
  );
  const captchaData = await captchaRes.json();

  return captchaData.success === true;
}

async function sendEmail(req, res) {
  const { name, phone, email, message, model, registration, token } =
    req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: GENERIC_ERROR });
  }

  if (!(await verifyCaptcha(token))) {
    return res.status(400).json({
      error: "No pudimos validar el Captcha. Por favor intente nuevamente.",
    });
  }

  const subject = `Nueva consulta${
    registration ? ` | ${registration}` : model ? ` | ${model}` : ""
  }`;

  const mailRes = await mg.messages.create("noreply.cielosa.com.ar", {
    // Quitar caracteres que puedan romper el header "From"
    from: `${String(name).replace(/[<>"\r\n]/g, "")} <notify@noreply.cielosa.com.ar>`,
    to: ["administracion@cielosa.com.ar", "marcelopaviotti@cielosa.com.ar"],
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
    throw new Error(GENERIC_ERROR);
  }

  return res.status(200).json(mailRes);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    return await sendEmail(req, res);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: GENERIC_ERROR });
  }
}
