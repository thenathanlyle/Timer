import { useState } from "react";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import "./App.css";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });

  const start = () => {
    run();
    setInterval(run, 10);
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  return (
    <div className="App">
      <div className="holderClock">
        <div className="timer">
          <Display time={time} />
          <Buttons start={start} />
        </div>
      </div>
    </div>
  );
}

export default App;
