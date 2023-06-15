import "./leftNavBar.scss";
import { Link } from "react-router-dom";
import profil from "../../assets/image-profile.jpg";
import home from "../../assets/navBar/home1.png";
import fav from "../../assets/navBar/heart1.png";
import ciel from "../../assets/navBar/cloud.png";
import mountain from "../../assets/navBar/mountain.png";
import forest from "../../assets/navBar/forest.png";
import sea from "../../assets/navBar/sea.png";
import urbain from "../../assets/navBar/street.png";
import field from "../../assets/navBar/fields.png";

export default function LeftNavBar() {
  return (
    <nav>
      <div className="categories">
        <Link to="/profile">
          <img src={profil} alt="profile" className="profile" />
        </Link>

        <Link to="/">
          <img src={home} className="small" alt="Home" />
          <p>Accueil</p>
        </Link>

        <Link to="/Favorites">
          <img src={fav} className="small" alt="Favorites" />
          <p>Favoris</p>
        </Link>

        <Link to="/Sky">
          <img src={ciel} alt="Ciel et nuages" />
          <p>Ciel et nuages</p>
        </Link>

        <Link to="/Mountain">
          <img src={mountain} alt="Montagnes" />
          <p>Montagnes</p>
        </Link>

        <Link to="/Forest">
          <img src={forest} alt="Fôrets" />
          <p>Fôrets</p>
        </Link>

        <Link to="/Sea">
          <img src={sea} alt="Mer et oceans" />
          <p>Mer et oceans</p>
        </Link>

        <Link to="/Urban">
          <img src={urbain} alt="Urbain" />
          <p>Urbain</p>
        </Link>

        <Link to="/Field">
          <img src={field} alt="Champ" />
          <p>Champ</p>
        </Link>
      </div>
    </nav>
  );
}
