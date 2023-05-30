const getStyleName = (value) => {
  if (value === '0') return 'cero';
  if (value === '/' || value === '+' || value === '-' || value === 'x' || value === '=') return 'operator';
  return '';
};

const ButtonBox = (props) => {
  const { value, press } = props;
  const onClickHandler = (event) => {
    press(event.target.value);
  };
  return (
    <button className={`${getStyleName(value)} button`} type="button" value={value} onClick={onClickHandler}>{ value }</button>
  );
};

export default ButtonBox;
