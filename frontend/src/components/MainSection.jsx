import Caroussel from "./videosDisplay/Caroussel";
import Grid from "./videosDisplay/Grid";
import ModalConnection from "./ModalConnection";
import HeroSlider2 from "./videosDisplay/HeroSlider2";

import "./mainSection.scss";

export default function MainSection() {
  return (
    <section className="body">
      <HeroSlider2 />
      <Caroussel />
      <Grid />
      <ModalConnection />
    </section>
  );
}
