import { Link } from "react-router-dom";
import vid1 from "../../assets/videos/forest-beach.jpg";
import vid2 from "../../assets/videos/mountain.jpg";
import vid3 from "../../assets/videos/snow-road.jpg";
import vid4 from "../../assets/videos/street.jpg";
import vid5 from "../../assets/videos/urbain.jpg";
import vid6 from "../../assets/videos/forest-beach2.jpg";

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
        <Link className="cell" to="/Videos">
          <img src={vid1} alt="forest-beach" />
        </Link>

        <Link className="cell" to="/Videos">
          <img src={vid2} alt="mountain" />
        </Link>

        <Link className="cell" to="/Videos">
          <img src={vid3} alt="snow-road" />
        </Link>

        <Link className="cell" to="/Videos">
          <img src={vid4} alt="street" />
        </Link>

        <Link className="cell" to="/Videos">
          <img src={vid5} alt="urbain" />
        </Link>

        <Link className="cell" to="/Videos">
          <img src={vid6} alt="urbain" />
        </Link>
      </div>

      <i className="rigth">
        <img src={rightArrow} alt="right-arrow" />
      </i>
    </div>
  );
}
