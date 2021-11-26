export default function Buttons(props) {
  return (
    <div>
      <button className="stopwatch" onClick={props.start}>
        Start
      </button>
    </div>
  );
}
