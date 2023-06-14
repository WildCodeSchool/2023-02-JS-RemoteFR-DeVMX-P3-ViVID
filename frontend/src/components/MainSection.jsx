import Caroussel from "./videosDisplay/Caroussel";
import "./mainSection.scss";
import BasicSlider from "./HeroSlider";

export default function MainSection() {
  return (
    <section className="body">
      <BasicSlider />
      <Caroussel />
    </section>
  );
}
