import Carousel from "../components/videosDisplay/Carousel";
import Grid from "../components/videosDisplay/Grid";
import ModalConnection from "../components/ModalConnection";
import HeroSlider from "../components/videosDisplay/HeroSlider";

import "./home.scss";

export default function Home() {
  return (
    <div className="flexContainer">
      <section className="body">
        <HeroSlider />
        <Carousel />
        <Grid />
        <ModalConnection />
      </section>
    </div>
  );
}
