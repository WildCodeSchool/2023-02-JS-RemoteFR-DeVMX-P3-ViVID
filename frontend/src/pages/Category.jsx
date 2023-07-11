import Carousel from "../components/videosDisplay/Carousel";
import Grid from "../components/videosDisplay/Grid";
import HeroSlider from "../components/videosDisplay/HeroSlider";

import "./category.scss";

export default function Home() {
  return (
    <div className="flexContainer">
      <section className="body">
        <HeroSlider />
        <Carousel />
        <Grid />
      </section>
    </div>
  );
}
