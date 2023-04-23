import Button from "./Button";
import cardStyles from "../css/Card.module.css"

const Card = (props) => {

  const { iconCard, textCard, typeCard, clickDeploy, clickRepo } = props;
  const isOddCard = () => {
    return typeCard === "odd" ? cardStyles.odd : cardStyles.even;
  }
  return (
    <section className={isOddCard()} typeCard={typeCard}>
      <span className={cardStyles.iconCard}>{iconCard}</span>
      <h1 className={cardStyles.protitle}>{textCard}</h1>    
      <Button text="View Deploy" type={"alter"} onClick={clickDeploy}/>
      <Button text="View Repo" type={"alter"} onClick={clickRepo}/>
    </section>
  );
}

export default Card;
