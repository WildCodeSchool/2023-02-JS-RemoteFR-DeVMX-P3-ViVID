import PropTypes from "prop-types";

import "./BtnSubscribe.scss";

export default function BtnSubscribe({ onOpenModal }) {
  return (
    <button className="btnSubscribe" type="button" onClick={onOpenModal}>
      <i>inscription</i>
    </button>
  );
}

BtnSubscribe.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};
