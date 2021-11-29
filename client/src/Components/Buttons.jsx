export default function Buttons(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button className="stopwatchStart" onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="stopwatchStop" onClick={props.stop}>
            Stop
          </button>
          <button className="stopwatchReset" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      {props.status === 2 ? (
        <div>
          <button className="stopwatchStop" onClick={props.resume}>
            Resume
          </button>
          <button className="stopwatchReset" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
