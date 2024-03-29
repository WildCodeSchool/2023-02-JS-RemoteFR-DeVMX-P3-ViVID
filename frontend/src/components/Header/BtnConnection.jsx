import PropTypes from "prop-types";

import cadenas from "../../assets/cadenas_white.png";

import "./BtnConnection.scss";

export default function BtnConnection({ onOpenModal }) {
  return (
    <button className="btnConnection" type="button" onClick={onOpenModal}>
      <img src={cadenas} alt="cadena" />
      <i>connexion</i>
    </button>
  );
}

BtnConnection.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};
