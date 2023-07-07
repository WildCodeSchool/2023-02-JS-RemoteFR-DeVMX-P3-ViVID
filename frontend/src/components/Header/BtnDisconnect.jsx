import { Link } from "react-router-dom";

import logout from "../../assets/logout.png";

import "./btnDisconnect.scss";

export default function BtnDisonnect() {
  return (
    <button className="btnDisconnect" type="button">
      <Link to="/">
        <img src={logout} alt="cadena" />
        <i>Déconnection</i>
      </Link>
    </button>
  );
}
