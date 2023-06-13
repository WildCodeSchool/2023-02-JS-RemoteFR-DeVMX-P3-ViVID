import "./BtnConnection.scss";
import cadenas from "../../assets/cadenas_white.png";

export default function BtnConnection() {
  return (
    <button className="btnConnection" type="button">
      <img src={cadenas} alt="cadena" />
      <i>connexion</i>
    </button>
  );
}
