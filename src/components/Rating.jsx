import { renderStars } from "../utils/starUtils";
function Rating(props) {
  return (
    <div className="rating">
      <p>{renderStars(props.children)}</p>
    </div>
  );
}
export default Rating;
