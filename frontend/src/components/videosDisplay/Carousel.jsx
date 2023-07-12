import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import rightArrow from "../../assets/videos/right-arrow.png";
import leftArrow from "../../assets/videos/left-arrow.png";
import "./carousel.scss";

export default function Carousel({ carouselVideoIds }) {
  const [carouselVid, setcarouselVid] = useState([]);
  // const ids = {"ids": carouselVideoIds}
  // console.log(ids)  // c bon;
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
      <i className="left">
        <img src={leftArrow} alt="left-arrow" />
      </i>

      <div className="carousel">
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

      <i className="rigth">
        <img src={rightArrow} alt="right-arrow" />
      </i>
    </div>
  );
}

Carousel.propTypes = {
  carouselVideoIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};
