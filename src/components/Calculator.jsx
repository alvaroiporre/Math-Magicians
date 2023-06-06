import { useState } from 'react';
import ButtonBox from './ButtonBox';
import calculate from '../logic/calculate';

const Calculator = () => {
  const values = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const press = (val) => {
    setData(calculate(data, val));
  };
  return (
    <section className="calculator-container">
      <h2>Let&apos;s do some Math!</h2>
      <div className="calculator">
        <input type="text" className="screen" value={data.next || data.total || '0'} />
        {values.map((val) => (
          <ButtonBox key={val} value={val} press={press} />
        ))}
      </div>
    </section>
  );
};

export default Calculator;
