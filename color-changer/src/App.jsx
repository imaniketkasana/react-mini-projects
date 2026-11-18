
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#bd5959");
  const [copied, setCopied] = useState(false);
  const [recentColors, setRecentColors] = useState([]);

  const changeColor = (newColor) => {
  setColor(newColor);
  setCopied(false);

  setRecentColors((prevColors) => [
    newColor,
    ...prevColors.filter((item) => item !== newColor),
  ].slice(0, 5));
};

  const generateRandomColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    changeColor(randomColor);
  };

const resetColor = () => {
  setColor("#bd5959");
  setCopied(false);
};

const clearRecentColors = () => {
  setRecentColors([]);
};

  const copyColor = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
    } catch {
      alert("Unable to copy color code");
    }
  };

  return (
    <div className="app">
      <div className="color-card">
        <h1>Color Studio</h1>
        <p>Choose a color and transform your background</p>

        <div className="color-info">
          <h3>Current Color</h3>

          <div
            className="color-preview"
            style={{ backgroundColor: color }}
          ></div>

          <p>{color}</p>

          <button className="copy-btn" onClick={copyColor}>
            {copied ? "Copied!" : "Copy HEX Code"}
          </button>
        </div>

        <h3 className="section-title">Choose Your Color</h3>

            <div className="custom-color">
              <label htmlFor="colorPicker">Choose Custom Color</label>

              <input
                type="color"
                id="colorPicker"
                value={color.startsWith("#") ? color : "#ff0000"}
                onChange={(e) => changeColor(e.target.value)}
              />
            </div>

          {recentColors.length > 0 && (
            <div className="recent-colors">
              <h3>Recent Colors</h3>

              <div className="recent-list">
                {recentColors.map((recentColor) => (
                  <button
                    key={recentColor}
                    className="recent-color"
                    style={{ backgroundColor: recentColor }}
                    onClick={() => changeColor(recentColor)}
                    title={recentColor}
                    aria-label={`Select color ${recentColor}`}
                  />
                ))}
              </div> 
               
            </div>
          )}


        <div className="buttons">
          <button onClick={() => changeColor("red")}>Red</button>
          <button onClick={() => changeColor("blue")}>Blue</button>
          <button onClick={() => changeColor("green")}>Green</button>
          <button onClick={() => changeColor("yellow")}>Yellow</button>
        </div>

        <button className="random-btn" onClick={generateRandomColor}>
          Generate Random Color
        </button>
        
          <div className="extra-actions">
            <button className="reset-btn" onClick={resetColor}>
              Reset Color
            </button>

            <button
              className="clear-btn"
              onClick={clearRecentColors}
              disabled={recentColors.length === 0}
            >
              Clear Recent Colors
            </button>
</div>

      </div>
    </div>
  );
}

export default App;
