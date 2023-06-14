import vid1 from "../../assets/videos/forest-beach.jpg";
import vid2 from "../../assets/videos/mountain.jpg";
import vid3 from "../../assets/videos/snow-road.jpg";
import vid4 from "../../assets/videos/street.jpg";
import vid5 from "../../assets/videos/urbain.jpg";
import rightArrow from "../../assets/videos/right-arrow.png";
import leftArrow from "../../assets/videos/left-arrow.png";
import "./caroussel.scss";

export default function Caroussel() {
  return (
    <div className="wrapper">
      <i className="left">
        <img src={leftArrow} alt="left-arrow" />
      </i>

      <div className="caroussel">
        <button type="button" className="cell">
          <img src={vid1} alt="forest-beach" />
        </button>

        <button type="button" className="cell">
          <img src={vid2} alt="mountain" />
        </button>

        <button type="button" className="cell">
          <img src={vid3} alt="snow-road" />
        </button>

        <button type="button" className="cell">
          <img src={vid4} alt="street" />
        </button>

        <button type="button" className="cell">
          <img src={vid5} alt="urbain" />
        </button>
      </div>

      <i className="rigth">
        <img src={rightArrow} alt="right-arrow" />
      </i>
    </div>
  );
}
