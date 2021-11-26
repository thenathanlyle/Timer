export default function Display(props) {
  return (
    <div>
      <span>{props.time.h}</span>
      &nbsp;:&nbsp;
      <span>{props.time.m}</span>
      &nbsp;:&nbsp;
      <span>{props.time.s}</span>
    </div>
  );
}
