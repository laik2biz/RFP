import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Your email has been sent. Thank you!");

    emailjs
      .sendForm(
        "service_zwp0odp",
        "template_7o2papk",
        form.current,
        "Fh1FXyX8pWbEKwikn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br></br>
      <br></br>
      <ul>
        <input type="text" name="user_name" placeholder="Enter your fullname" />
      </ul>
      <label>Email</label>
      <br></br>
      <br></br>
      <ul>
        <input type="email" name="user_email" placeholder="Enter your email" />
      </ul>
      <br></br>
      <label>Message</label>
      <br></br>
      <br></br>
      <ul>
        <textarea
          name="message"
          placeholder="Please provide us some feedback on how your experience went!"
        />
      </ul>
      <br></br>
      <ul>
        <input type="submit" value="Send" />
      </ul>
    </form>
  );
};

export default ContactUs;
