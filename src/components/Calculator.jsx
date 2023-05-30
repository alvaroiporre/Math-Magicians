import '../App.css';
import ButtonBox from './ButtonBox';

const Calculator = () => {
  const values = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="calculator">
      <input type="text" className="screen" value="5x8=40" />
      {values.map((val) => (
        <ButtonBox key={val} value={val} />
      ))}
    </div>
  );
};

export default Calculator;
