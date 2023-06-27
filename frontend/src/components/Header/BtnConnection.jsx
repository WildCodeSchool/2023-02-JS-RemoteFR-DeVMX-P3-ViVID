import PropTypes from "prop-types";
import "./BtnConnection.scss";
import cadenas from "../../assets/cadenas_white.png";

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
