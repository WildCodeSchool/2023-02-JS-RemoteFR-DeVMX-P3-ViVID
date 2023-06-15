import { useState } from "react";
import SearchBar from "./SearchBar";
import BtnSuscribe from "./BtnSuscribe";
import BtnConnection from "./BtnConnection";
import ModalConnection from "../ModalConnection";

import "./Header.scss";
import logo from "../../assets/vivid_logo.png";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header>
      <button type="button" className="burgerMenu">
        <i className="bar firstBar" />
        <i className="bar middleBar" />
        <i className="bar lastBar" />
      </button>

      <div className="flexContainer">
        <img src={logo} alt="vivid_logo" />
        <SearchBar />
        <div className="signInContainer">
          <BtnSuscribe />
          <BtnConnection onOpenModal={openModal} />
          <ModalConnection isOpen={modalOpen} onCloseModal={closeModal} />
        </div>
      </div>
    </header>
  );
}
