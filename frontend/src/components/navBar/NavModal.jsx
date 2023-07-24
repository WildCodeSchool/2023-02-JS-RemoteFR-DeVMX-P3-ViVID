import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./NavModal.scss";

export default function NavModal({ className, closeNavbar }) {
  return (
    <div className={`categories ${closeNavbar ? "open" : ""}`}>
      <div className={`navModal ${className}`}>
        <Link to="/profile" className="link" onClick={closeNavbar}>
          <p>Profile</p>
        </Link>

        <Link to="/" className="link" onClick={closeNavbar}>
          <p>Accueil</p>
        </Link>

        <Link to="/Favoris" className="link" onClick={closeNavbar}>
          <p>Favoris</p>
        </Link>

        <Link to="/Ciel&nuages" className="link" onClick={closeNavbar}>
          <p>Ciel et nuages</p>
        </Link>

        <Link to="/Montagnes" className="link" onClick={closeNavbar}>
          <p>Montagnes</p>
        </Link>

        <Link to="/Forets" className="link" onClick={closeNavbar}>
          <p>Forêts</p>
        </Link>

        <Link to="/Mer&oceans" className="link" onClick={closeNavbar}>
          <p>Mer et oceans</p>
        </Link>

        <Link to="/Urbain" className="link" onClick={closeNavbar}>
          <p>Urbain</p>
        </Link>

        <Link to="/Champ" className="link" onClick={closeNavbar}>
          <p>Champ</p>
        </Link>
      </div>
    </div>
  );
}

NavModal.propTypes = {
  className: PropTypes.string,
  closeNavbar: PropTypes.bool.isRequired,
};

NavModal.defaultProps = {
  className: "",
};
