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
      <div className="col">
        <img src={logo} alt="vivid_logo" />

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

      <div className="col">
        <ul className="unstyled">
          <li>Contact</li>
          <li>A propos</li>
          <li>Plan du site</li>
          <br />
          &copy;{new Date().getFullYear()} ViViD. All right reserved.
        </ul>
      </div>

      <div className="col">
        <ul className="unstyled">
          <li>Des vidéos exclusives pour vous</li>

          <li>
            <button className="btnConnection" type="button" onClick={openModal}>
              <div className="cadena">
                <img src={cadenas} alt="cadena" />
              </div>

              <i>connexion</i>
            </button>
          </li>
        </ul>
      </div>

      {modalOpen && (
        <ModalConnection isOpen={modalOpen} onCloseModal={closeModal} />
      )}
    </div>
  );
}
