import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import rightArrow from "../../assets/videos/right-arrow.png";
import leftArrow from "../../assets/videos/left-arrow.png";
import "./carousel.scss";

export default function Carousel() {
  const videoIds = {
    video: [4, 7, 9, 10, 11, 5, 8, 23, 25, 18],
  };
  const [carouselVid, setcarouselVid] = useState([]);
  const [carouselPosition, setCarouselPosition] = useState(0);

  const handleLeftButtonClick = () => {
    if (carouselPosition > 0) {
      setCarouselPosition(carouselPosition - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (carouselPosition === carouselVid.length - 1) {
      setCarouselPosition(0); // Revenir au début si vous êtes à la dernière position
    } else {
      setCarouselPosition(carouselPosition + 1);
    }
  };

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/videos/loadVideos`, videoIds)
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
