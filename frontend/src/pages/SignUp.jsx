import React, { useState } from "react";
import "./signup.scss";

export default function RegistrationForm() {
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [verificationPassword, setVerificationPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "userName") {
      setUserName(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "verificationPassword") {
      setVerificationPassword(value);
    }
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(email, userName, password, verificationPassword);
  };

  return (
    <div className="form">
      <h1 className="subscription">INSCRIPTION</h1>
      <div className="form-body">
        <div className="email">
          <label className="form_label" htmlFor="email">
            Identifiant :
          </label>
          <input
            className="form_input"
            type="email"
            id="email"
            onChange={(e) => handleInputChange(e)}
            placeholder="email@example.com"
          />
        </div>
        <div className="username">
          <label className="form_label" htmlFor="userName">
            Pseudonyme :
          </label>
          <input
            className="form_input"
            type="text"
            id="userName"
            onChange={(e) => handleInputChange(e)}
            placeholder="example"
          />
        </div>
        <div className="password">
          <label className="form_label" htmlFor="password">
            Mot de Passe :
          </label>
          <input
            className="form_input"
            type="password"
            id="password"
            onChange={(e) => handleInputChange(e)}
            placeholder="******"
          />
        </div>
        <div className="verification-password">
          <label className="form_label" htmlFor="verificationPassword">
            Vérification du Mot de Passe :
          </label>
          <input
            className="form_input"
            type="password"
            id="verificationPassword"
            onChange={(e) => handleInputChange(e)}
            placeholder="******"
          />
        </div>
      </div>
      <div className="register-button">
        <button onClick={() => handleSubmit()} type="submit" className="btn">
          S'inscrire
        </button>
      </div>
      <div className="text_subscription">
        <p>
          VIVI collecte vos pseudonymes, adresses email, mots de passe, prénoms
          et noms en tant que traitement. Unet telle collecte est effectuée sur
          la base de votre consentement (i) à créer un profil/compte sur notre
          site, et/ou (ii) à recevoir nos newsletters et/ou celles de nos
          partenaires et des autres sociétés de notre groupe, ainsi que nos
          offres commerciales. Elle est nécessaire pour vous transmettre
          lesdites newsletters et/ou offres et/ou créer ledit profil/compte.
        </p>
      </div>
    </div>
  );
}
