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
    <>
      <div className="form">
        <div className="form-body">
          <div className="email">
            <label className="form_label" htmlFor="email">
              Identifiant
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="email@example.com"
            />
          </div>
          <div className="username">
            <label className="form_label" htmlFor="userName">
              Pseudonyme
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
              Mot de Passe
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
              Vérification du Mot de Passe
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
      </div>
      <div className="register-button">
        <button onClick={() => handleSubmit()} type="submit" className="btn">
          S'inscrire
        </button>
      </div>
    </>
  );
}
