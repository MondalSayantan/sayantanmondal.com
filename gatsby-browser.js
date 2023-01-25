import "./src/styles/global.css";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// import { SnackbarProvider } from "notistack";

export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lcb0SEkAAAAANUHfPu4d3_IPdXUKRtf1lW5lo7O">
      {/* <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        preventDuplicate
      > */}
      {element}
      {/* </SnackbarProvider> */}
    </GoogleReCaptchaProvider>
  );
};
