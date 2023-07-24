import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./ModalSubscribe.scss";

export default function ModalSubscribe({ isOpen, onCloseModal }) {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleModalSubscribe = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const validationFilters = {
      firstname: /^[a - zA - Z]/i,
      lastname: /^[a - zA - Z]/i,
      email: /^[-_.a-z0-9]+@[-_a-z0-9]+(\.[a-z]{2,4})?\.[a-z]{2,6}$/i,
      username: /^[a - zA - Z]/i,
      password: /^\S+$/i,
      confirmPassword: /^\S+$/i,
    };
  };

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
    <form onSubmit={handleModalSubscribe}>
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
              <label className="form_label" htmlFor="firstname">
                Prénom :
              </label>
              <input
                className="form_input"
                type="text"
                id="firstname"
                value={firstname}
                onChange={handleFirstname}
                placeholder="Prénom"
              />

              <label className="form_label" htmlFor="lastname">
                Nom :
              </label>
              <input
                className="form_input"
                type="text"
                id="lastname"
                value={lastname}
                onChange={handleLastname}
                placeholder="Nom"
              />

              <label className="form_label" htmlFor="email">
                Identifiant :
              </label>
              <input
                className="form_input"
                type="email"
                id="email"
                value={email}
                onChange={handleEmail}
                placeholder="email@exemple.com"
              />

              <label className="form_label" htmlFor="userName">
                Pseudonyme :
              </label>
              <input
                className="form_input"
                type="text"
                id="username"
                value={username}
                onChange={handleUsername}
                placeholder="Pseudo"
              />

              <label className="form_label" htmlFor="password">
                Mot de Passe :
              </label>
              <input
                className="form_input"
                type="password"
                id="password"
                value={password}
                onChange={handlePassword}
                placeholder="******"
              />

              <label className="form_label" htmlFor="verificationPassword">
                Vérification du Mot de Passe :
              </label>
              <input
                className="form_input"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                placeholder="******"
              />
            </div>

            <div className="ckeckboxContainer">
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
                  newsletters d'informations des partenaires de VIVID ou des
                  autres sociétés du groupe Origins Digital
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
            </div>

            <div className="text_subscription">
              <p>
                VIVI collecte vos pseudonymes, adresses email, mots de passe,
                prénoms et noms en tant que traitement. Unet telle collecte est
                effectuée sur la base de votre consentement (i) à créer un
                profil/compte sur notre site, et/ou (ii) à recevoir nos
                newsletters et/ou celles de nos partenaires et des autres
                sociétés de notre groupe, ainsi que nos offres commerciales.
                Elle est nécessaire pour vous transmettre lesdites newsletters
                et/ou offres et/ou créer ledit profil/compte.
              </p>
              <br />
              <p>
                Vous pouvez vous désabonner de ces dernières à tout moment en
                cliquant sur le lien inclu dans l'email envoyé ou en décochant
                les cases correspondantes sur votre profil. Vous pouvez
                également exercer vos droits à l'accès, la rectification, la
                limitation, la portabilité, l'opposition et la suppression du
                traitement de vos données:
              </p>
              <br />
              <p>
                • Sur le site : via la rubrique{" "}
                <Link to="/" onClick={onCloseModal}>
                  nous contacter
                </Link>
              </p>
              <br />
              <p>• Par email : à l'adresse sav@vivid.fr</p>
              <br />
              <p>
                En entrant vos pseudonymes, adresses email, mot de passe,
                prénoms et noms, vous acceptez que VIVID les traite dans les
                buts précisés ci-dessus.
              </p>
              <br />
              <p>
                Pour plus d'informations, veuillez consulter notre avis en
                matière de{" "}
                <Link to="/" onClick={onCloseModal}>
                  protection de la vie privée
                </Link>
              </p>
            </div>
          </section>

          <footer className="modal-container-footer">
            <div className="register-button">
              <button type="submit" className="btn">
                S'inscrire
              </button>
            </div>

            <div className="cancel-button">
              <button onClick={onCloseModal} type="button" className="cl-btn">
                Annuler
              </button>
            </div>
          </footer>
        </div>
      </div>
    </form>
  );
}

ModalSubscribe.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
