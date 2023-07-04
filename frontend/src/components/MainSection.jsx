import Carousel from "./videosDisplay/Carousel";
import Grid from "./videosDisplay/Grid";
import ModalConnection from "./ModalConnection";
import HeroSlider from "./videosDisplay/HeroSlider";

import "./mainSection.scss";

export default function MainSection() {
  return (
    <section className="body">
      <HeroSlider />
      <Carousel />
      <Grid />
      <ModalConnection />
    </section>
  );
}
