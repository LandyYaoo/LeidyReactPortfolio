import styleButton from '../css/Button.module.css'

const Button = (props) => {
  const { type, text, onClick } = props;
  const isCommonButton = () => {
    return type === "common" ? styleButton.common : styleButton.alter;
  }
  return (
    <button className={isCommonButton()} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

