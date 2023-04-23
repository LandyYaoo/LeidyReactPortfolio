import { FaArrowRight } from "react-icons/fa";
import contactStyles from "../css/Contact.module.css";
import Button from "./Button";

const Contact =()=>{
  return(
    <section id="contact" className={contactStyles.contacto}>
      <h1>Contact Me</h1>
      <form action="#" className={contactStyles.formContact}>
        <input type="text" placeholder="Your name here" className={contactStyles.yourname} />
        <input type="text" placeholder="Your email here" className={contactStyles.youremail} />
        <textarea name="description" id="description" cols="30" rows="10" placeholder="How can I help you?" className={contactStyles.description}></textarea>
        <Button type="common" text="Send"/>
        <h2><span className={contactStyles.span}><FaArrowRight /></span>  Let's Work Together</h2>
      </form>
    </section>
  )
}
export default Contact;