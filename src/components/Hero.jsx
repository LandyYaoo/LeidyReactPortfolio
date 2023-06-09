import styleHero from '../css/Hero.module.css'
import { BsGithub } from "react-icons/bs";
import { useState } from 'react';

const Hero = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  
  const handleImageClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return(
    <section id='hero'>
      <h1 className={styleHero.name}>HI I'M LEIDY</h1>
      <section className={styleHero.squares}>
        <article className={styleHero.square1}></article>
        <article className={styleHero.square2}>
            <img className={styleHero.img}  />
        </article>
      </section>
      <section className={styleHero.info}>
      <a href="https://github.com/LandyYaoo" target="_blank"><span><BsGithub size={45}/></span></a>
        <h2>FRONT END WEB DEVELOPER</h2>
      </section>
    </section>
  )
}
export default Hero;