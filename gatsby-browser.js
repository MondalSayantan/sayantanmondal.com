import "./src/styles/global.css";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lcb0SEkAAAAANUHfPu4d3_IPdXUKRtf1lW5lo7O">
      {element}
    </GoogleReCaptchaProvider>
  );
};
