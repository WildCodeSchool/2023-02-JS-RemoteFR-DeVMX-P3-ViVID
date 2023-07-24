import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";

import "./carousel.scss";

export default function Carousel({ carouselVideoIds }) {
  const [carouselVid, setcarouselVid] = useState([]);
  const [carouselPosition, setCarouselPosition] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/loadVideos`,
          { ids: carouselVideoIds }
        );
        setcarouselVid(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const handleLeftButtonClick = () => {
    setCarouselPosition((prevPosition) =>
      prevPosition > 0 ? prevPosition - 1 : prevPosition
    );
  };

  const handleRightButtonClick = () => {
    setCarouselPosition((prevPosition) =>
      prevPosition === carouselVid.length - 1 ? 0 : prevPosition + 1
    );
  };

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
