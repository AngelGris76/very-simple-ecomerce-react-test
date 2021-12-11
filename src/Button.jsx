const Button = ({ value, text, click }) => {
  return (
    <>
      <button type="button" value={value} onClick={click}>
        {text}
      </button>
    </>
  );
};
export default Button;
