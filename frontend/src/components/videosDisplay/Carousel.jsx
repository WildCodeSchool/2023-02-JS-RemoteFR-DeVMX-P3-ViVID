import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import rightArrow from "../../assets/videos/right-arrow.png";
import leftArrow from "../../assets/videos/left-arrow.png";
import "./carousel.scss";

export default function carousel() {
  const videoIds = {
    video: [4, 7, 9, 10, 11, 5, 8],
  };
  const [carouselVid, setcarouselVid] = useState([]);
  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/videos/loadVideos`, videoIds)
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
                src={`${import.meta.env.VITE_BACKEND_URL}${obj.cover_img}`}
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
