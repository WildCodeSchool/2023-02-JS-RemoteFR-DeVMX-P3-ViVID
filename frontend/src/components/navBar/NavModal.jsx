import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./NavModal.scss";

export default function NavModal({ className }) {
  return (
    <div className={`navModal ${className}`}>
      <Link to="/profile" className="link">
        <p>Profile</p>
      </Link>

      <Link to="/" className="link">
        <p>Accueil</p>
      </Link>

      <Link to="/Favoris" className="link">
        <p>Favoris</p>
      </Link>

      <Link to="/Ciel&nuages" className="link">
        <p>Ciel et nuages</p>
      </Link>

      <Link to="/Montagnes" className="link">
        <p>Montagnes</p>
      </Link>

      <Link to="/Forets" className="link">
        <p>Forêts</p>
      </Link>

      <Link to="/Mer&oceans" className="link">
        <p>Mer et oceans</p>
      </Link>

      <Link to="/Urbain" className="link">
        <p>Urbain</p>
      </Link>

      <Link to="/Champ" className="link">
        <p>Champ</p>
      </Link>
    </div>
  );
}

NavModal.propTypes = {
  className: PropTypes.string,
};

NavModal.defaultProps = {
  className: "",
};
