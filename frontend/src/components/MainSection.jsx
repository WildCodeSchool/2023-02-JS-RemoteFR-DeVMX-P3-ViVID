import Caroussel from "./videosDisplay/Caroussel";
import "./mainSection.scss";
import BasicSlider from "./videosDisplay/HeroSlider";
import Grid from "./videosDisplay/Grid";

export default function MainSection() {
  return (
    <section className="body">
      <BasicSlider />
      <Caroussel />
      <Grid />
    </section>
  );
}
