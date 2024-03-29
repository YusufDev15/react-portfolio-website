import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import "./contact.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9tf7q4d",
      "template_9hcb4vg",
      form.current,
      "nzr2DcN6Op1Gyqh6l"
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="start">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>yusuf.eng88@gmail.com</h5>
            <a
              href="mailto:yusuf.eng88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>Phone Number</h5>
            <a
              href="https://api.whatsapp.com/send?phone=07951296481"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a WhatsApp message
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
