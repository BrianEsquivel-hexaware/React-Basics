import { useState } from 'react';
import './CounterExample.css';

function CounterExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-example">
      <h4>Interactive Counter Example</h4>
      <div className="counter-display">
        <p className="counter-value">{count}</p>
        <p className="counter-label">Current Count</p>
      </div>
      <div className="counter-buttons">
        <button 
          className="btn btn-decrement"
          onClick={handleDecrement}
        >
          ➖ Decrease
        </button>
        <button 
          className="btn btn-reset"
          onClick={handleReset}
        >
          🔄 Reset
        </button>
        <button 
          className="btn btn-increment"
          onClick={handleIncrement}
        >
          ➕ Increase
        </button>
      </div>
      <p className="counter-description">
        Click the buttons to see <code>useState</code> in action! Each click updates the state and re-renders the component.
      </p>
    </div>
  );
}

export default CounterExample;
