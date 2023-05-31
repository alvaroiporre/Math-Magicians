const getStyleName = (value) => {
  if (value === '0') return 'cero';
  if (value === '/' || value === '+' || value === '-' || value === 'x' || value === '=') return 'operator';
  return '';
};

const ButtonBox = (props) => {
  const { value } = props;
  return (
    <button className={`${getStyleName(value)} button`} type="button">{ value }</button>
  );
};

export default ButtonBox;
