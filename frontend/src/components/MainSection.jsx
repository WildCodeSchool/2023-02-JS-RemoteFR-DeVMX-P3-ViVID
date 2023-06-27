import Caroussel from "./videosDisplay/Caroussel";
import Grid from "./videosDisplay/Grid";
import ModalConnection from "./ModalConnection";
import HeroSlider from "./videosDisplay/HeroSlider";

import "./mainSection.scss";

export default function MainSection() {
  return (
    <section className="body">
      <HeroSlider />
      <Caroussel />
      <Grid />
      <ModalConnection />
    </section>
  );
}
