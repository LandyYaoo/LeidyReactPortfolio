import styleButton from "../css/Button.module.css";

const Button = (props) => {
  const { type, text, onClick, icon } = props;
  const isCommonButton = () => {
    return type === "common" ? styleButton.common : styleButton.alter;
  };
  return (
    <button className={isCommonButton()} type={type} onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
