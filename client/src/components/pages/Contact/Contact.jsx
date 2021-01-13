/** @format */

import { useState, useContext, useEffect } from "react"
import { RecaptchaContext } from "../../../context/RecaptchaContext"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import PopUp from "../../PopUp/PopUp"
import { LoginContext } from "../../../context/LoginContext"
import axios from "axios";
import qs from "qs"
import "./Contact.css";

const Contact = () => {

  const { popupVisible } = useContext(LoginContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const {siteKey} = useContext(RecaptchaContext)

  const handleChange = (event) => {
    switch (event.target.name) {
      case "contact-name":
        setContactName(event.target.value);
        break;
      case "contact-email":
        setContactEmail(event.target.value);
        break;
      case "contact-message":
        setContactMessage(event.target.value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(siteKey, { action: 'submit' }).then(token => {
        submitData(token);
      });
    });

    const submitData = token => {

      const payload = {
        name: contactName,
        email: contactEmail,
        message: contactMessage,
        gRecaptchaResponse: token
      };

    axios
      .post("http://localhost:5000/contact-form", qs.stringify(payload))
      .then((res, err) => {
        if (err) {
          console.log(err);
        } if (res.data === "request failed recaptcha") {
          alert("request failed recaptcha.")
        } else {
          alert("Thanks for getting in touch. We will be in touch shortly.");
          setContactName("");
          setContactEmail("");
          setContactMessage("");
          window.scrollTo(0, 0);
        }
      });
  };
}

  return (
  <div>
  {popupVisible && <PopUp/>}
    <div className="page-heading-container min-page-height">
      <h1 className="page-heading">Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form display-form">
        <MDBInput
          key="input-5"
          type="text"
          name="contact-name"
          id="contact-name"
          value={contactName}
          label="name"
          onChange={handleChange}
          required
        />
        <MDBInput
          key="input-6"
          type="email"
          name="contact-email"
          id="contact-email"
          value={contactEmail}
          label="email"
          onChange={handleChange}
          required
        />
        <MDBInput
          key="input-7"
          type="textarea"
          rows="5"
          name="contact-message"
          id="contact-message"
          value={contactMessage}
          label="message"
          onChange={handleChange}
          required
        />
        <MDBBtn outline color="elegant" type="submit">
          Send Message <MDBIcon far icon="paper-plane" />
        </MDBBtn>
      </form>
    </div>
  </div>
  );
};

export default Contact;
