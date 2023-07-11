import { useState, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserExport from "../contexts/UserContext";

import "./ModalConnection.scss";

export default function ModalConnection({ isOpen, onCloseModal }) {
  const { setUsers, setToken } = useContext(UserExport.UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const navigate = useNavigate();

  if (!isOpen || isLoggedIn) {
    return null;
  }

  const getUser = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg("Veuillez renseigner vos identifiants");
    }
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        console.info(res);
        if (res.data.currentuser.role_id === 2) {
          setUsers(res.data.currentuser);
          setToken(res.data.token);
          setTimeout(() => {
            navigate("/admin");
          }, 500);
        } else {
          setTimeout(() => {
            navigate("/");
          }, 500);
        }
        onCloseModal();
        setisLoggedIn(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button type="button" className="close-btn" onClick={onCloseModal}>
          X
        </button>

        <h2>Identifiez-vous</h2>
        <div className="formContainer">
          <div className="signup-section">
            <h3>Pas encore inscrit ?</h3>
            <p>N'attendez plus ! Rejoignez la communauté Vivid !</p>
            <button type="button" className="create-account">
              Créer un compte
            </button>
          </div>

          <div className="form-section">
            <h3>Déjà incrit ?</h3>
            <p>connectez-vous ci-dessous !</p>
            <form onSubmit={getUser}>
              <label htmlFor="email">Identifiant</label>
              <input
                type="email"
                id="email"
                placeholder="email@exemple.com"
                onChange={(event) => {
                  const input = event.target;
                  setEmail(input.value);
                }}
              />

              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                placeholder="******"
                className="password"
                onChange={(event) => {
                  const input = event.target;
                  setPassword(input.value);
                }}
              />

              {/* <a href="#">Mot de passe oublié ?</a> */}

              <button type="submit" className="modalBtnConnect">
                Se connecter
              </button>
            </form>
            {msg && <p>{msg}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

ModalConnection.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
