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
      <div className="flexContainer">
        <button type="button" className="burgerMenu">
          <i className="bar firstBar" />
          <i className="bar middleBar" />
          <i className="bar lastBar" />
        </button>

        <img src={logo} className="logo" alt="vivid_logo" />
      </div>

      <SearchBar />
      <div className="signInContainer">
        <BtnSuscribe />
        <BtnConnection />
      </div>
    </header>
  );
}
