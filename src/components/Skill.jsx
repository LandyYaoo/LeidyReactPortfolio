import SkillStyle from '../css/Skill.module.css';

const Skill = (props) => {
  return (
    <section className={SkillStyle.list}>
      
          <li className={SkillStyle.first}> {props.title}</li>
          <li ><span > {props.mark}</span></li>
          
        
          <li ><span> {props.mark2}</span></li>
          <li className={SkillStyle.second}> {props.title2}</li>
        
      
      </section>
  )
};

export default Skill;