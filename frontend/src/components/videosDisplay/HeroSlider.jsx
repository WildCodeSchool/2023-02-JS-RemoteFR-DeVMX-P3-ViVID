import { useState, useEffect } from "react";

import previousImg from "../../assets/previous.png";
import nextImg from "../../assets/next.png";
import playVideo from "../../assets/play_logo_white.png";

import "./heroslider.scss";

export default function HeroSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const images = [
    "https://i.imgur.com/Gu5Cznz.jpg",
    "https://i.imgur.com/idjXzVQ.jpg",
    "https://i.imgur.com/8DYumaY.jpg",
    "https://i.imgur.com/8IuucQZ.jpg",
    "https://i.imgur.com/P9IVqkS.jpg",
  ];

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
    const imageInterval = setInterval(goToNextImage, 8000);

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
