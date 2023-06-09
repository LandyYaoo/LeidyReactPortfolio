import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import contactStyles from "../css/Contact.module.css";
import Button from "./Button";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  function enviarMensaje() {
    const url = `https://api.whatsapp.com/send?phone=573014432138&text=Hola%20Leidy!%0A%0AMi%20nombre%20es:%0A${name}%0A%0AEmail:%0A${email}%0A%0AMensaje:%0A${description}%0A`;
    window.open(url);
  }

  return (
    <section id="contact" className={contactStyles.contacto}>
      <h1>Contact Me</h1>
      <form action="#" className={contactStyles.formContact}>
        <input
          type="text"
          placeholder="Your name here"
          className={contactStyles.yourname}
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your email here"
          className={contactStyles.youremail}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="How can I help you?"
          className={contactStyles.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <Button
          type="common"
          text={"Send "}
          icon={<FaWhatsapp size={20} />}
          onClick={enviarMensaje}
        />
        <h2>
          <span className={contactStyles.span}>
            <FaArrowRight />
          </span>{" "}
          Let's Work Together
        </h2>
      </form>
    </section>
  );
};

export default Contact;
