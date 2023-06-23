import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import rightArrow from "../../assets/videos/right-arrow.png";
import leftArrow from "../../assets/videos/left-arrow.png";
import "./caroussel.scss";

export default function Caroussel() {
  const videoIds = {
    video1: 4,
    video2: 7,
    video3: 9,
    video4: 10,
    video5: 11,
    video6: 5,
    video7: 8,
  };
  const [carousselVid, setCarousselVid] = useState([]);
  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/videos/loadVideos`, videoIds)
      .then((res) => setCarousselVid(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="wrapper">
      <i className="left">
        <img src={leftArrow} alt="left-arrow" />
      </i>

      <div className="caroussel">
        {carousselVid &&
          carousselVid.map((obj) => (
            <Link className="cell" to={`/Videos/:${obj.id}`} key={obj.id}>
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
