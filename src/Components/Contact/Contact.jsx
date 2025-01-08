import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a2f4ddb8-9c49-40ad-94d0-adb4e52efc58");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form Submitted Successfully");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">
        {/* Start of the Contact Left */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new project , so feel free to
            send me the message about anything you want me to work one.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>khaankamran.121@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+923175286224</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Rawalpindi , Pakistan</p>
            </div>
          </div>
        </div>

        {/* //Now Start of the Contact Right */}
        <div>
          <form onSubmit={onSubmit} action="submit" className="contact-right">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
            <label htmlFor="">Write your message</label>
            <textarea
              placeholder="Enter your message"
              rows="8"
              name="message"
              className="message"
              required
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
