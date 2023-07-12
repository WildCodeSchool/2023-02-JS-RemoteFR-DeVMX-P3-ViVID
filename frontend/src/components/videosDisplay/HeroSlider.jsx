import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import previousImg from "../../assets/previous.png";
import nextImg from "../../assets/next.png";
import playVideo from "../../assets/play_logo_white.png";
import "./heroslider.scss";

export default function HeroSlider({ videoIds }) {
  const [videos, setVideos] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const images = [];
  // videos && videos.map((video) => images.push(video.thumbnail));
  console.warn(videos);
  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/videos/loadVideos`, {
        videoIds,
      })
      .then((res) => setVideos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const goToPreviousImage = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
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
    }, 3000);

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
          src={images[currentImageIndex]}
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
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={
              selectedImageIndex === index ? "thumbnail active" : "thumbnail"
            }
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image} alt={`Thumbnail ${index}`} />
          </button>
        ))}
      </div>

      <div className="btn-prev-next-container">
        <div className="btnPreviousContainer">
          <button
            className="btn-previous"
            onClick={goToPreviousImage}
            type="button"
          >
            <img className="imgPrevNext" src={previousImg} alt="previous" />
          </button>
        </div>
        <div className="btnNextContainer">
          <button className="btn-next" onClick={goToNextImage} type="button">
            <img className="imgPrevNext" src={nextImg} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
}

HeroSlider.propTypes = {
  videoIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};
