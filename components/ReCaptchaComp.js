import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';
import scriptLoader from "react-async-script-loader";

const RECAPTCHA_KEY = process.env.RECAPTCHA_KEY;

class ReCaptchaComp extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  componentDidMount() {
    if (this.captcha) {
        console.log("started, just a second...")
        this.captcha.reset();
    }
  }
  onLoadRecaptcha() {
      if (this.captcha) {
          this.captcha.reset();
      }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }
  render() {
    return (
      <div>
        <ReCaptcha
            ref={(el) => {this.captcha = el;}}
            size="normal"
            data-theme="dark"            
            data-badge="inline"
            render="explicit"
            //Add the site key here 
            sitekey="6Ld__3YaAAAAACM003tNeDaYsHU2HS2wva9ttgWD"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
      </div>
    );
  };
};
export default scriptLoader(`https://www.google.com/recaptcha/api.js`)(ReCaptchaComp);