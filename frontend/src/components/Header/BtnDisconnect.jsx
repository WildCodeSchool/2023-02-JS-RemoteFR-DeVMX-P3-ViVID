import { useContext } from "react";
import { Link } from "react-router-dom";
import UserExport from "../../contexts/UserContext";

import logout from "../../assets/logout.png";
import back from "../../assets/back.png";

import "./btnDisconnect.scss";

export default function BtnDisonnect() {
  const { users, setToken, setUsers } = useContext(UserExport.UserContext);

  const handleDisconnect = () => {
    setUsers(null);
    setToken(null);
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <>
      {users.role_id === 2 && (
        <button className="btnBackAdmin" type="button">
          <Link to="/admin">
            <img src={back} alt="back" />
            <i>Gestion Admin</i>
          </Link>
        </button>
      )}
      <button
        className="btnDisconnect"
        type="button"
        onClick={handleDisconnect}
      >
        <Link to="/">
          <img src={logout} alt="logout" />
          <i>Déconnexion</i>
        </Link>
      </button>
    </>
  );
}
