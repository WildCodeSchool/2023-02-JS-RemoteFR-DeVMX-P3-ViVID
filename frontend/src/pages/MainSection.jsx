import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Carousel from "../components/videosDisplay/Carousel";
import Grid from "../components/videosDisplay/Grid";
import HeroSlider from "../components/videosDisplay/HeroSlider";
import "./mainSection.scss";

export default function MainSection({ categoryId }) {
  const [sliderVideoIds, setSliderVideoIds] = useState([]);
  const [carouselVideoIds, setCarouselVideoIds] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/videosSections/${categoryId}`
        );
        const carouselArray = [];
        const sliderArray = [];
        for (const i of res.data) {
          if (i.section_id === 2) sliderArray.push(i.video_id);
          if (i.section_id === 3) carouselArray.push(i.video_id);
        }
        setCarouselVideoIds(carouselArray);
        setSliderVideoIds(sliderArray);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [categoryId]);

  return (
    <div className="flexContainer">
      <section className="body">
        {sliderVideoIds.length && (
          <HeroSlider sliderVideoIds={sliderVideoIds} />
        )}

        {carouselVideoIds.length && (
          <Carousel carouselVideoIds={carouselVideoIds} />
        )}

        <Grid categoryId={categoryId} />
      </section>
    </div>
  );
}

MainSection.propTypes = {
  categoryId: PropTypes.number.isRequired,
};
