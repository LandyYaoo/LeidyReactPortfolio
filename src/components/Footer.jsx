import stylesFooter from "../css/Footer.module.css"
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";


const Footer = () => {
  return(
    <footer id="footer" className={stylesFooter.footer}>
      <section className={stylesFooter.separation}>
          <article className={stylesFooter.line}></article>
          <article className={stylesFooter.icons}>
            <a href="https://www.linkedin.com/in/leidypardo/" target="_blank"><span><FaLinkedin size={45}/></span></a> 
            <a href="https://github.com/LandyYaoo" target="_blank"><span><FaGithubSquare size={45}/></span></a>
            <a href="https://www.facebook.com/leidy.pardo.7796" target="_blank"><span><FaFacebookSquare size={45}/></span></a> 
          </article>
          <article  className={stylesFooter.line}></article>
      </section>
          <h1>Leidy Lorena Pardo</h1>
          <p>All rigths reserved 2023</p>   
    </footer>
  )
}
export default Footer;