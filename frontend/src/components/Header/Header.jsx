import SearchBar from "./SearchBar";
import BtnSuscribe from "./BtnSuscribe";
import BtnConnection from "./BtnConnection";

import "./Header.scss";
import logo from "../../assets/vivid_logo.png";

export default function Header() {
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
