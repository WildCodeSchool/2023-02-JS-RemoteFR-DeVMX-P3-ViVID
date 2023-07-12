import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import rightArrow from "../../assets/videos/right-arrow.png";
import leftArrow from "../../assets/videos/left-arrow.png";
import "./carousel.scss";

export default function Carousel({ carouselVideoIds }) {
  const [carouselVid, setcarouselVid] = useState([]);
  const [carouselPosition, setCarouselPosition] = useState(0);

  const handleLeftButtonClick = () => {
    if (carouselPosition > 0) {
      setCarouselPosition(carouselPosition - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (carouselPosition === carouselVid.length - 1) {
      setCarouselPosition(0);
    } else {
      setCarouselPosition(carouselPosition + 1);
    }
  };

  useEffect(() => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/videos/loadVideos`,
        carouselVideoIds
      )
      .then((res) => setcarouselVid(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="wrapper">
      <button type="button" className="left" onClick={handleLeftButtonClick}>
        <img src={leftArrow} alt="left-arrow" />
      </button>

      <div
        className="carousel"
        style={{ transform: `translateX(-${carouselPosition * 25}%)` }}
      >
        {carouselVid &&
          carouselVid.map((obj) => (
            <Link className="cell" to={`/Videos/${obj.id}`} key={obj.id}>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${obj.thumbnail}`}
                alt={obj.title}
              />
            </Link>
          ))}
      </div>

      <button type="button" className="right" onClick={handleRightButtonClick}>
        <img src={rightArrow} alt="right-arrow" />
      </button>
    </div>
  );
}

Carousel.propTypes = {
  carouselVideoIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};
