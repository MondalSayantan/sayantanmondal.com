import "./src/styles/global.css";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_PUBLICKEY}>
      {element}
    </GoogleReCaptchaProvider>
  );
};
