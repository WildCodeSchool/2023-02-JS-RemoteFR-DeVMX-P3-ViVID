import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import playVideo from "../../assets/play_logo_white.png";

import "./heroslider.scss";

export default function HeroSlider({ sliderVideoIds }) {
  const [videos, setVideos] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/loadVideos`, {
        ids: sliderVideoIds,
      })
      .then((res) => {
        const images = res.data.map((item) => item.thumbnail);
        setVideos(images);
      })
      .catch((err) => console.error(err));
  }, [sliderVideoIds]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleButtonClick = () => (
    <Link to={`/videos/${sliderVideoIds[currentImageIndex]}`}>
      <button className="video-btn" type="button">
        <img className="playImgBtn" src={playVideo} alt="play" />
      </button>
    </Link>
  );

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const buttonTimeout = setTimeout(() => {
      setShowButton(true);
    }, 1000);

    return () => {
      clearTimeout(buttonTimeout);
    };
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(goToNextImage, 5000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [currentImageIndex]);

  return (
    <div className="hero-slider-container">
      <div className="sliderAndBtnPlay">
        <img
          className="imgSlider"
          src={`${import.meta.env.VITE_BACKEND_URL}${
            videos[currentImageIndex]
          }`}
          alt="HeroSlider"
        />
        {showButton && handleButtonClick()}
      </div>

      <div className="thumbnail-bar">
        {videos.map((image, index) => (
          <button
            key={image}
            type="button"
            className={
              currentImageIndex === index ? "thumbnail active" : "thumbnail"
            }
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${image}`}
              alt={`Thumbnail ${index}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
HeroSlider.propTypes = {
  sliderVideoIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};
