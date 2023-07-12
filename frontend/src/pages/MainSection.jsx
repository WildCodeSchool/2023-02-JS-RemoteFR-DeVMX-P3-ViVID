// import axios from "axios";
import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
// import Carousel from "../components/videosDisplay/Carousel";
import Grid from "../components/videosDisplay/Grid";
// import HeroSlider from "../components/videosDisplay/HeroSlider";
import "./mainSection.scss";

export default function MainSection({ categoryId }) {
  // const [videosSection, setVideosSection] = useState([]);
  // const [sliderVideoIds, setSliderVideoIds] = useState([]);
  // const [carouselVideoIds, setCarouselVideoIds] = useState([]);
  // if (videosSection) {
  //   videosSection.map((vidSect) => {
  //     if (vidSect.section_id === 2)
  //       setSliderVideoIds((oldArray) => [...oldArray, vidSect.video_id]);
  //     if (vidSect.section_id === 3)
  //       setCarouselVideoIds((oldArray) => [...oldArray, vidSect.video_id]);
  //   });
  // }

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/videosSections/${categoryId}`)
  //     .then((res) => setVideosSection(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className="flexContainer">
      <section className="body">
        {/* {sliderVideoIds && <HeroSlider videoIds={sliderVideoIds} />} */}
        {/* {carouselVideoIds && <Carousel carouselVideoIds={carouselVideoIds} />} */}
        <Grid categoryId={categoryId} />
      </section>
    </div>
  );
}

MainSection.propTypes = {
  categoryId: PropTypes.number.isRequired,
};
