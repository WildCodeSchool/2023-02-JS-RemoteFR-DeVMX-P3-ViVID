import Caroussel from "./videosDisplay/Caroussel";
import BasicSlider from "./HeroSlider";
import "./mainSection.scss";
import BasicSlider from "./videosDisplay/HeroSlider";

export default function MainSection() {
  return (
    <section className="body">
      <BasicSlider />
      <Caroussel />
      
    </section>
  );
}
