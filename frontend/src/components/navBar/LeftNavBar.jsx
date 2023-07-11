import { Link } from "react-router-dom";

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

export default function LeftNavBar() {
  return (
    <nav>
      <div className="categories">
        <Link to="/profile">
          <img src={profil} alt="profile" className="profile" />
        </Link>

        <Link to="/">
          <img src={home} className="small" alt="Home" />
        </Link>

        <Link to="/Favoris">
          <img src={fav} className="small" alt="Favorites" />
        </Link>

        <Link to="/Ciel&nuages">
          <img src={ciel} alt="Ciel et nuages" />
        </Link>

        <Link to="/Montagnes">
          <img src={mountain} alt="Montagnes" />
        </Link>

        <Link to="/Forets">
          <img src={forest} alt="Forêts" />
        </Link>

        <Link to="/Mer&oceans">
          <img src={sea} alt="Mer et oceans" />
        </Link>

        <Link to="/Urbain">
          <img src={urbain} alt="Urbain" />
        </Link>

        <Link to="/Champ">
          <img src={field} alt="Champ" />
        </Link>
      </div>
    </nav>
  );
}
