import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import ModalConnection from "../ModalConnection";

import logo from "../../assets/vivid_logo.png";
import cadenas from "../../assets/cadenas_white.png";

import "./footer.scss";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="footer">
      <img src={logo} alt="vivid_logo" />

      <div className="flex">
        <div className="col1">
          <p className="social-container">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </p>

          <div className="description">
            ViVID, première plateforme OTT <br /> spécialisée dans les vidéos
            aériennes.
          </div>
        </div>

        <ul className="list">
          <li>Contact</li>
          <li>A propos</li>
          <li>Plan du site</li>
        </ul>
        <ul className="unstyled">
          <li>Des vidéos exclusives pour vous</li>
          <button className="btnConnection" type="button" onClick={openModal}>
            <img src={cadenas} alt="cadena" />
            <i>connexion</i>
          </button>
        </ul>
      </div>
      <p className="rights">
        &copy;{new Date().getFullYear()} ViViD. All right reserved.
      </p>

      {modalOpen && (
        <ModalConnection isOpen={modalOpen} onCloseModal={closeModal} />
      )}
    </div>
  );
}
