import styleAbout from "../css/About.module.css";
import Skill from "./Skill";
import { BsCircleFill } from "react-icons/bs";
import { BsCircleHalf } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";

import Button from "./Button";

const About = () => {
  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1oqyaGBX3pefhJPFCuhOyK7_J6l5IMoLU/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <section className={styleAbout.about} id="about">
      <h1 className={styleAbout.aboutTitle}>About Me</h1>
      <h2 className={styleAbout.myInfo}>
        I'm a nurse passionate for programming
      </h2>
      <Button text="Open my cv" type={"common"} onClick={openCV} />
      <h1 className={styleAbout.skillsTitle}>My Skills</h1>
      <section className={styleAbout.mySkills}>
        <ul className={styleAbout.list1}>
          <Skill
            title="HTML"
            mark={[
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleHalf />
            ]}
          />
          <Skill
            title="CSS"
            mark={[
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleHalf />
            ]}
          />
          <Skill
            title="JAVASCRIPT"
            mark={[
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircle />
            ]}
          />
          <Skill
            title="REACT"
            mark={[
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleHalf />,
              <BsCircle />
            ]}
          />
        </ul>
        <ul className={styleAbout.list2}>
          <Skill
            title2="Proactive"
            mark2={[
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleHalf />
            ]}
          />
          <Skill
            title2="Team Worker"
            mark2={[
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleHalf />
            ]}
          />
          <Skill
          title2="Responsable"
            mark2={[
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircle />
            ]}
          />
          <Skill
            title2="Always Learner"
            mark2={[
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleFill />,
              <BsCircleHalf />,
              <BsCircle />
            ]}
          />
        </ul>
      </section>
    </section>
  );
};
export default About;
