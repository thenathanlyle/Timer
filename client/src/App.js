import { useState } from "react";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import "./App.css";

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  return (
    <div className="App">
      <div className="holderClock">
        <div className="timer">
          <Display time={time} />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
