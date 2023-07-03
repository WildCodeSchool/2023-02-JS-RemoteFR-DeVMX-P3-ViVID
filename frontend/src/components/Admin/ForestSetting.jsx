import PropTypes from "prop-types";

import "./forestSetting.scss";

export default function ForestSetting({ tab }) {
  return (
    <div className={tab === 5 ? "display" : "hide"}>
      <p>Ici les paramêtres pour Forêts</p>
      <p>Ici les paramêtres pour Forêts</p>
      <p>Ici les paramêtres pour Forêts</p>
      <p>Ici les paramêtres pour Forêts</p>
      <p>Ici les paramêtres pour Forêts</p>
    </div>
  );
}

ForestSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
