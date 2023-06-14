import "./grid.scss";
import vid1 from "../../assets/videos/verdure.jpg";
import vid2 from "../../assets/videos/snow-road.jpg";
import vid3 from "../../assets/videos/forest-beach2.jpg";
import vid4 from "../../assets/videos/cloud-mountain.jpg";
import vid5 from "../../assets/videos/mountain.jpg";
import vid6 from "../../assets/videos/forest-beach.jpg";
import vid7 from "../../assets/videos/urbain.jpg";
import vid8 from "../../assets/videos/red-mountain.jpg";
import vid9 from "../../assets/videos/white-city.jpg";
import vid10 from "../../assets/videos/blue-forest.jpg";
import vid11 from "../../assets/videos/cloud-city.jpg";
import vid12 from "../../assets/videos/sea.jpg";
import vid13 from "../../assets/videos/street.jpg";

export default function Grid() {
  return (
    <div className="grid">
      <button type="button">
        <img src={vid1} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid2} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid3} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid4} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid5} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid6} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid7} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid8} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid9} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid10} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid11} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid12} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid13} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid3} alt="" />
        <h2>Titre</h2>
      </button>

      <button type="button">
        <img src={vid4} alt="" />
        <h2>Titre</h2>
      </button>
    </div>
  );
}
