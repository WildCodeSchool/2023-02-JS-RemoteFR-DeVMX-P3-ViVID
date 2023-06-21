import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ModalSubscribe.scss";

export default function ModalSubscribe({ isOpen, onCloseModal }) {
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
    // const obj = {
    // email,
    // userName
    // password,
    // verificationPassword,
    // };
    // const newPostKey = push(child(ref(database), "posts")).key;
    // const updates = {};
    // updates[`/${newPostKey}`] = obj;
    // return updates(ref(database), updates);
    // eslint-disable-next-line no-restricted-syntax
    console.log(email, userName, password, verificationPassword);
  };

  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="submodal">
      <div className="submodal-container">
        <header className="modal-header">
          <h1 className="subscription">INSCRIPTION</h1>
          <button
            type="button"
            className="sub-close-btn"
            onClick={onCloseModal}
          >
            X
          </button>
        </header>
        <section className="submodal-container-body">
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
          <div className="signup_checkbox">
            <label>
              <input
                className="checkbox_input"
                type="checkbox"
                checked={checkedOne}
                onChange={handleChangeOne}
              />
              J'accepte de recevoir par e-mail les offres et newsletters
              d'informations de VIVID
            </label>
          </div>
          <div className="signup_checkbox">
            <label>
              <input
                className="checkbox_input"
                type="checkbox"
                checked={checkedTwo}
                onChange={handleChangeTwo}
              />
              Je souhaite également recevoir par e-mail les offres et
              newsletters d'informations des partenaires de VIVID ou des autres
              sociétés du groupe Origins Digital
            </label>
          </div>
          <div className="signup_checkbox">
            <label>
              <input
                className="checkbox_input"
                type="checkbox"
                checked={checkedThree}
                onChange={handleChangeThree}
              />
              J'accepte les <Link to="/">Conditions d'utilisations</Link>
            </label>
          </div>
          <div className="text_subscription">
            <p>
              VIVI collecte vos pseudonymes, adresses email, mots de passe,
              prénoms et noms en tant que traitement. Unet telle collecte est
              effectuée sur la base de votre consentement (i) à créer un
              profil/compte sur notre site, et/ou (ii) à recevoir nos
              newsletters et/ou celles de nos partenaires et des autres sociétés
              de notre groupe, ainsi que nos offres commerciales. Elle est
              nécessaire pour vous transmettre lesdites newsletters et/ou offres
              et/ou créer ledit profil/compte.
            </p>
            <br />
            <p>
              Vous pouvez vous désabonner de ces dernières à tout moment en
              cliquant sur le lien inclu dans l'email envoyé ou en décochant les
              cases correspondantes sur votre profil. Vous pouvez également
              exercer vos droits à l'accès, la rectification, la limitation, la
              portabilité, l'opposition et la suppression du traitement de vos
              données:
            </p>
            <br />
            <p>
              • Sur le site : via la rubrique <Link to="/">nous contacter</Link>
              ;
            </p>
            <br />
            <p>• Par email : à l'adresse sav@vivid.fr</p>
            <br />
            <p>
              En entrant vos pseudonymes, adresses email, mot de passe, prénoms
              et noms, vous acceptez que VIVID les traite dans les buts précisés
              ci-dessus.
            </p>
            <br />
            <p>
              Pour plus d'informations, veuillez consulter notre avis en matière
              de <Link to="/">protection de la vie privée</Link>
            </p>
          </div>
        </section>
        <section>
          <footer className="modal-footer">
            <div className="cancel-button">
              <button onClick={onCloseModal} type="button" className="cl-btn">
                Annuler
              </button>
            </div>
            <div className="register-button">
              <button
                onClick={() => handleSubmit()}
                type="submit"
                className="btn"
              >
                S'inscrire
              </button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

ModalSubscribe.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
