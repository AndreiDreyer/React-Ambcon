import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";
import scriptLoader from "react-async-script-loader";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
var captcha = false;

function ReCaptchaComp() {
  const componentDidMount = () => {
    if (captcha) {
      console.log("started, just a second...");
      captcha.reset();
    }
  };
  const onLoadRecaptcha = () => {
    if (captcha) {
      captcha.reset();
    }
  };
  const verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  };

  return (
    <div>
      <ReCaptcha
        ref={(el) => {
          captcha = el;
        }}
        size="normal"
        data-theme="dark"
        data-badge="inline"
        render="explicit"
        //Add the site key here
        sitekey={RECAPTCHA_KEY}
        onloadCallback={onLoadRecaptcha}
        verifyCallback={verifyCallback}
      />
    </div>
  );
}

export default scriptLoader(`https://www.google.com/recaptcha/api.js`)(ReCaptchaComp);
