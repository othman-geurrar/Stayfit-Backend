// config/nodemailer.js
import nodemailer from "nodemailer";
import { Email_PASSWORD, EMAIL_COMPANY_FROM } from "./env.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: EMAIL_COMPANY_FROM, // e.g. "yourcompany@gmail.com"
    pass: Email_PASSWORD,     // Google App Password (NOT normal Gmail password)
  },
});

export default transporter;
