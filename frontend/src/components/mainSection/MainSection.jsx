import BasicSlider from "../videosDisplay/HeroSlider";
import Caroussel from "../videosDisplay/Caroussel";
import Grid from "../videosDisplay/Grid";
import ModalConnection from "../modalConnection/ModalConnection";

import "./mainSection.scss";

export default function MainSection() {
  return (
    <section className="body">
      <BasicSlider />
      <Caroussel />
      <Grid />
      <ModalConnection />
    </section>
  );
}
