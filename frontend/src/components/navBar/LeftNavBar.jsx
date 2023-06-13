import "./leftNavBar.scss";
import profil from "../../assets/image-profile.jpg";
import home from "../../assets/navBar/home1.png";
import fav from "../../assets/navBar/heart1.png";
import ciel from "../../assets/navBar/cloud.png";
import mountain from "../../assets/navBar/mountain.png";
import forest from "../../assets/navBar/forest.png";
import sea from "../../assets/navBar/sea.png";
import urbain from "../../assets/navBar/street.png";
import field from "../../assets/navBar/fields.png";

export default function leftNavBar() {
  return (
    <nav>
      <div className="categories">
        <img src={profil} alt="profile" />
        <img src={home} className="small" alt="Home" />
        <p>Accueil</p>

        <img src={fav} className="small" alt="Favorites" />
        <p>Favoris</p>

        <img src={ciel} alt="Ciel et nuages" />
        <p>Ciel et nuages</p>

        <img src={mountain} alt="Montagnes" />
        <p>Montagnes</p>

        <img src={forest} alt="Fôrets" />
        <p>Fôrets</p>

        <img src={sea} alt="Mer et oceans" />
        <p>Mer et oceans</p>

        <img src={urbain} alt="Urbain" />
        <p>Urbain</p>

        <img src={field} alt="Champ" />
        <p>Champ</p>
      </div>
    </nav>
  );
}
