function IdCard(props) {
  return (
    <div className="id-card">
      <div className="img-container">
        <img src={props.picture} alt="id-photo"></img>
      </div>
      <div className="text-container">
        <p>
          <span>First name:</span>
          {props.firstName}
        </p>
        <p>
          <span>Last name:</span>
          {props.lastName}
        </p>
        <p>
          <span>Gender:</span>
          {props.gender}
        </p>
        <p>
          <span>Height:</span>
          {props.height / 100} m
        </p>
        <p>
          <span>Birth:</span>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
export default IdCard;
