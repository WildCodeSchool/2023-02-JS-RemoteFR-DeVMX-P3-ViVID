import { Link } from "react-router-dom";

import error404 from "../assets/error404.png";

import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="errorContainer">
      <img className="errorImg" src={error404} alt="error404" />
      <button className="btnErrorReturn" type="button">
        <Link to="/">Retour à l'accueil</Link>
      </button>
      <a href="http://www.freepik.com" className="creditImg">
        Image designed by stories / Freepik
      </a>
    </div>
  );
}
