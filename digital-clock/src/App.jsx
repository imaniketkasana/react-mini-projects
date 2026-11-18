import { useState,useEffect } from "react";
import "./App.css";

 function App(){
  const [time, setTime]= useState(new Date());
const [is24Hour, setIs24Hour] = useState(false);
const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
      const timer=setInterval(()=>{
        setTime(new Date());
      },1000);
      return () => clearInterval(timer);
    }, []);

  return(

      <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="clock-card">
          <p className="tag">Digital Clock</p>  

          <h1>My Digital Clock</h1>

          <h2>
            {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !is24Hour,
            })}
          </h2>
          <div className="format-buttons">
            <button
              className={!is24Hour ? "active" : ""}
              onClick={() => setIs24Hour(false)}
            >
              12 Hour
            </button>

            <button
              className={is24Hour ? "active" : ""}
              onClick={() => setIs24Hour(true)}
            >
              24 Hour
            </button>
            <button
  className="theme-toggle"
  onClick={() => setIsDarkMode(!isDarkMode)}
>
  {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
</div>

          <p className="date">{time.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })} </p>

          <p className="footer">Your Local Time</p>

        </div>

      </div>
  );
 }
 export default App;