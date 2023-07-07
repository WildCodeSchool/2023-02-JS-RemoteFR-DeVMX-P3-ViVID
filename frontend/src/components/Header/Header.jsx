import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import BtnSubscribe from "./BtnSubscribe";
import BtnConnection from "./BtnConnection";
import ModalConnection from "../ModalConnection";
import ModalSubscribe from "../ModalSubscribe";
import NavModal from "../navBar/NavModal";

import "./Header.scss";

import logo from "../../assets/vivid_logo.png";
import BtnDisonnect from "./BtnDisconnect";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [subModalOpen, setSubModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openSubModal = () => {
    setSubModalOpen(true);
  };

  const subCloseModal = () => {
    setSubModalOpen(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="flexContainer">
        <button type="button" className="burgerMenu" onClick={handleMenuClick}>
          <i className="bar firstBar" />
          <i className="bar middleBar" />
          <i className="bar lastBar" />
        </button>
        {isMenuOpen && (
          <NavModal className={isMenuOpen ? "modal-enter" : "modal-exit"} />
        )}

        <Link to="/">
          <img src={logo} className="logo" alt="vivid_logo" />
        </Link>
      </div>

      <SearchBar />
      <div className="signInContainer">
        <BtnSubscribe onOpenModal={openSubModal} />
        <BtnConnection onOpenModal={openModal} />
        <BtnDisonnect />
        <ModalConnection isOpen={modalOpen} onCloseModal={closeModal} />
        <ModalSubscribe isOpen={subModalOpen} onCloseModal={subCloseModal} />
      </div>
    </header>
  );
}
