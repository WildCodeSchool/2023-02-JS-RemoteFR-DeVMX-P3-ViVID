import Caroussel from "./videosDisplay/Caroussel";
import BasicSlider from "./HeroSlider";
import "./mainSection.scss";

export default function MainSection() {
  return (
    <section className="body">
      <BasicSlider />
      <Caroussel />
    </section>
  );
}
