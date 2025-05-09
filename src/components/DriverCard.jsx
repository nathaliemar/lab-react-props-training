import { renderStars } from "../utils/starUtils";
function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="img-container">
        <img src={props.img} alt="driver-photo" />
      </div>
      <div className="text-container">
        <p className="driver-name">{props.name}</p>
        <p>{renderStars(props.rating)}</p>
        <p>
          {props.car.model}-{props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
export default DriverCard;
