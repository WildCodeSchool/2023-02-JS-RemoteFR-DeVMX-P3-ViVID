import SearchBar from "./SearchBar";
import BtnSuscribe from "./BtnSuscribe";
import BtnConnection from "./BtnConnection";

import "./Header.scss";
import logo from "../../assets/vivid_logo.png";

export default function Header() {
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
          <BtnConnection />
        </div>
      </div>
    </header>
  );
}
