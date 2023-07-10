import { useContext } from "react";
import { Link } from "react-router-dom";
import UserExport from "../../contexts/UserContext";

import logout from "../../assets/logout.png";

import "./btnDisconnect.scss";

export default function BtnDisonnect() {
  const { setToken } = useContext(UserExport.UserContext);

  const handleDisconnect = () => {
    setToken(null);
  };

  return (
    <button className="btnDisconnect" type="button" onClick={handleDisconnect}>
      <Link to="/">
        <img src={logout} alt="logout" />
        <i>Déconnection</i>
      </Link>
    </button>
  );
}
