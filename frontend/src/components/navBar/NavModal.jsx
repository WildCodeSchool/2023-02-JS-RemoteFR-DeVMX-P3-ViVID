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

      <Link to="/Favorites" className="link">
        <p>Favoris</p>
      </Link>

      <Link to="/Sky" className="link">
        <p>Ciel et nuages</p>
      </Link>

      <Link to="/Mountain" className="link">
        <p>Montagnes</p>
      </Link>

      <Link to="/Forest" className="link">
        <p>Forêts</p>
      </Link>

      <Link to="/Sea" className="link">
        <p>Mer et oceans</p>
      </Link>

      <Link to="/Urban" className="link">
        <p>Urbain</p>
      </Link>

      <Link to="/Field" className="link">
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
