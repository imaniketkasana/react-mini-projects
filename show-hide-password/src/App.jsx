
import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  // Password Strength Logic
  let strength = "";

  if (password.length === 0) {
    strength = "";
  } else if (password.length < 6) {
    strength = "Weak";
  } else if (password.length < 10) {
    strength = "Medium";
  } else {
    strength = "Strong";
  }

  return (
    <div className="app">
      <div className="password-card">

        <div className="card-icon">🔐</div>

        <h1>Show Hide Password</h1>
        <p>Enter your password below</p>

        {/* Password Input */}
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Password Strength Text */}
        {strength && (
          <p className={`strength-text ${strength.toLowerCase()}`}>
            Password Strength: {strength}
          </p>
        )}

        {/* Password Strength Bar */}
        {strength && (
          <div className="strength-bar">
            <div
              className={`strength-progress ${strength.toLowerCase()}`}
            ></div>
          </div>
        )}

        <p className="info-text">
          Use at least 10 characters for a strong password.
        </p>

      </div>
    </div>
  );
}

export default App;
