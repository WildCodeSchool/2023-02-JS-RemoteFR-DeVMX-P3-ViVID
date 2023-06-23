import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import BtnSubscribe from "./BtnSubscribe";
import BtnConnection from "./BtnConnection";
import ModalConnection from "../modalConnection/ModalConnection";
import ModalSubscribe from "../ModalSubscribe";
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

  const [subModalOpen, setSubModalOpen] = useState(false);

  const openSubModal = () => {
    setSubModalOpen(true);
  };

  const subCloseModal = () => {
    setSubModalOpen(false);
  };

  return (
    <header>
      <div className="flexContainer">
        <button type="button" className="burgerMenu">
          <i className="bar firstBar" />
          <i className="bar middleBar" />
          <i className="bar lastBar" />
        </button>

        <Link to="/">
          <img src={logo} className="logo" alt="vivid_logo" />
        </Link>
      </div>

      <SearchBar />
      <div className="signInContainer">
        <BtnSubscribe onOpenModal={openSubModal} />
        <BtnConnection onOpenModal={openModal} />
        <ModalConnection isOpen={modalOpen} onCloseModal={closeModal} />
        <ModalSubscribe isOpen={subModalOpen} onCloseModal={subCloseModal} />
      </div>
    </header>
  );
}
