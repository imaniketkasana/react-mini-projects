
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="counter-card">

        <p className="tag">REACT MINI PROJECT</p>

        <h1>Counter App</h1>

        <p className="subtitle">
          Keep track of your numbers
        </p>

        <div className="counter-display">
          {count}
        </div>

        <div className="button-group">
          <button
            className="btn increase"
            onClick={() => setCount(count + 1)}
          >
            + Increase
          </button>

          <button
            className="btn decrease"
            onClick={() => setCount(count - 1)}
          >
            - Decrease
          </button>
        </div>

        <button
          className="reset-btn"
          onClick={() => setCount(0)}
        >
          ↻ Reset Counter
        </button>

        <p className="footer">
          Built with React JS
        </p>

      </div>
    </div>
  );
}

export default App;
