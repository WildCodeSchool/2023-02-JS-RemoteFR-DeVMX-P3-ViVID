import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import BtnConnection from "./BtnConnection";
import BtnDisonnect from "./BtnDisconnect";
import BtnSubscribe from "./BtnSubscribe";
import ModalConnection from "../ModalConnection";
import ModalSubscribe from "../ModalSubscribe";
import NavModal from "../navBar/NavModal";
import SearchBar from "./SearchBar";
import UserExport from "../../contexts/UserContext";

import logo from "../../assets/vivid_logo.png";

import "./Header.scss";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [subModalOpen, setSubModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token } = useContext(UserExport.UserContext);

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
        {!token && <BtnSubscribe onOpenModal={openSubModal} />}
        {!token && <BtnConnection onOpenModal={openModal} />}
        {token && <BtnDisonnect />}
        <ModalConnection isOpen={modalOpen} onCloseModal={closeModal} />
        <ModalSubscribe isOpen={subModalOpen} onCloseModal={subCloseModal} />
      </div>
    </header>
  );
}
