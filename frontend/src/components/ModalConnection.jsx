import React from "react";
import PropTypes from "prop-types";

import "./ModalConnection.scss";

export default function ModalConnection({ isOpen, onCloseModal }) {
  if (!isOpen) {
    return null;
  }

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
            <input type="email" id="email" placeholder="email@exemple.com" />

            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="******"
              className="password"
            />

            {/* <a href="#">Mot de passe oublié ?</a> */}

            <button type="button" className="modalBtnConnect">
              Se connecter
            </button>
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
