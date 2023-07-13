import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import playVideo from "../../assets/play_logo_white.png";
import "./heroslider.scss";

export default function HeroSlider({ sliderVideoIds }) {
  const [videos, setVideos] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/loadVideos`, {
        ids: sliderVideoIds,
      })
      .then((res) => {
        const images = [];
        for (const i of res.data) {
          images.push(i.thumbnail);
        }
        setVideos(images);
      })
      .catch((err) => console.error(err));
  }, []);

  const goToNextImage = () => {
    const newIndex =
      currentImageIndex === videos.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImageIndex(newIndex);
  };

  const handleButtonClick = () => {
    window.location.href = "lien_de_la_video";
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    const buttonTimeout = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => {
      clearTimeout(buttonTimeout);
    };
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(goToNextImage, 5000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);

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
        {showButton && (
          <button
            className="video-btn"
            onClick={handleButtonClick}
            type="button"
          >
            <img className="playImgBtn" src={playVideo} alt="play" />
          </button>
        )}
      </div>

      <div className="thumbnail-bar">
        {videos.map((image, index) => (
          <button
            key={image}
            type="button"
            className={
              selectedImageIndex === index ? "thumbnail active" : "thumbnail"
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
