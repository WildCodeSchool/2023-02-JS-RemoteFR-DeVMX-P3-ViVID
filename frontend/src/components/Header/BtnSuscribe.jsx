import { Link } from "react-router-dom";
import "./BtnSuscribe.scss";

export default function BtnSuscribe() {
  return (
    <Link to="/inscription">
      <button className="btnSuscribe" type="button">
        <i>inscription</i>
      </button>
    </Link>
  );
}
