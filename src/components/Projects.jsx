import Button from "./Button";
import Card from "./Card";
import { FaIdCard, FaMusic, FaUtensils } from "react-icons/fa";
import { MdForest } from "react-icons/md";
import stylesProjects from "../css/Projects.module.css"

const Projects = () => {
  
  const enlaces = [
    "https://landyyaoo.github.io/imaginedragons/",
    "https://github.com/LandyYaoo/imaginedragons",
    "https://landyyaoo.github.io/Food-WebSite/",
    "https://github.com/LandyYaoo/Food-WebSite",
    "https://leidy-pardo.netlify.app/",
    "https://github.com/LandyYaoo/LeidyReactPortfolio",
    "https://rutas-naturales.netlify.app",
    "https://github.com/LandyYaoo/Reservas-Naturales-Blog",
  ];
  
  const openLinks = (index) => {
      window.open(enlaces[index])
  };
  
  return (
    <article className={stylesProjects.all}>
      <section className={stylesProjects.projects} id="projects">
        <h1>My projects</h1>
        <section className={stylesProjects.proyectos}>
          <Card
            typeCard={"even"}
            iconCard={<FaUtensils />}
            textCard={"Food Web Page"}
            clickDeploy={() => openLinks(2)}
            clickRepo={() => openLinks(3)}
          />
          <Card
            typeCard={"odd"}
            iconCard={<FaIdCard />}
            textCard={"My Portfolio"}
            clickDeploy={() => openLinks(4)}
            clickRepo={() => openLinks(5)}
          />
          <Card
            typeCard={"even"}
            iconCard={<MdForest />}
            textCard={"Nature Reserves Blog"}
            clickDeploy={() => openLinks(6)}
            clickRepo={() => openLinks(7)}
          />
        </section>
      </section>
    </article>
  );
}
export default Projects;