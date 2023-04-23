import Button from "./Button";
import Card from "./Card";
import { FaIdCard, FaMusic, FaUtensils } from "react-icons/fa";
import stylesProjects from "../css/Projects.module.css"

const Projects = () => {
  
  const enlaces = ["https://landyyaoo.github.io/imaginedragons/", 
  "https://github.com/LandyYaoo/imaginedragons",
  "https://landyyaoo.github.io/Food-WebSite/", 
  "https://github.com/LandyYaoo/Food-WebSite", 
  "https://landyyaoo.github.io/Myportfolio/",
  "https://github.com/LandyYaoo/Myportfolio"]
  
  const openLinks = (index) => {
      window.open(enlaces[index])
  };
  
  return (
    <article className={stylesProjects.all}>
      <section className={stylesProjects.projects} id="projects">
          <h1>My projects</h1>
          <section className={stylesProjects.proyectos}>
            <Card typeCard={"odd"} iconCard={<FaMusic />} textCard={"Imagine dragons web page"} clickDeploy={() => openLinks(0)} clickRepo={() => openLinks(1)} />
            <Card typeCard={"even"} iconCard={<FaUtensils />} textCard={"Food Web Page"} clickDeploy={() => openLinks(2)} 
              clickRepo={() => openLinks(3)} />
            <Card typeCard={"odd"} iconCard={<FaIdCard />} textCard={"My Portfolio"} clickDeploy={() => openLinks(4)} 
              clickRepo={() => openLinks(5)} />
          </section>
      </section>
    </article>
  )
}
export default Projects;