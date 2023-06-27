import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserExport from "../contexts/UserContext";
import "./ModalConnection.scss";

export default function ModalConnection({ isOpen, onCloseModal }) {
  if (!isOpen) {
    return null;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserExport.UserContext);

  const handleClick = () => {
    if (!email || !password) {
      setMsg("Veuillez renseigner vos identifiants");
    }
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password })
      // .then((res) => {
      //   if (res.data.user_role === "admin") {
      //     setUser(res.data);
      //     setTimeout(() => {
      //       navigate("/admin/a");
      //     }, 500);
      //   } else {
      //     navigate("/");
      //   }

      .then((res) => {
        console.warn("Vous êtes connecté !");
        setUser(res.data);
        if (res.data.user_role === "admin") {
          navigate("/admin/a");
        } else {
          navigate("/");
        }
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
            <button type="button">Créer un compte</button>
          </div>

          <div className="form-section">
            <h3>Déjà incrit ?</h3>
            <p>connectez-vous ci-dessous !</p>
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

            <button
              type="button"
              className="modalBtnConnect"
              onClick={handleClick}
            >
              Se connecter
            </button>
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
