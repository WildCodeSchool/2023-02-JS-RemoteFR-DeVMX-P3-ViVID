import PropTypes from "prop-types";

import "./fieldSetting.scss";

export default function FieldSetting({ tab }) {
  return (
    <div className={tab === 8 ? "display" : "hide"}>
      <p>Ici les paramêtres pour Champs</p>
      <p>Ici les paramêtres pour Champs</p>
      <p>Ici les paramêtres pour Champs</p>
      <p>Ici les paramêtres pour Champs</p>
      <p>Ici les paramêtres pour Champs</p>
    </div>
  );
}

FieldSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
