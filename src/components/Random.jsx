function Random(props) {
  return (
    <div className="random">
      <p>
        Random value bewteen {props.min} and {props.max} =>{" "}
        {Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}{" "}
      </p>
    </div>
  );
}
export default Random;
