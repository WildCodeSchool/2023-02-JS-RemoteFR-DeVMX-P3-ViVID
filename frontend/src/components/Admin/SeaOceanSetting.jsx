import PropTypes from "prop-types";

import "./seaOceanSetting.scss";

export default function SeaOceanSetting({ tab }) {
  return (
    <div className={tab === 6 ? "display" : "hide"}>
      <p>Ici les paramêtres pour Mer & Océans</p>
      <p>Ici les paramêtres pour Mer & Océans</p>
      <p>Ici les paramêtres pour Mer & Océans</p>
      <p>Ici les paramêtres pour Mer & Océans</p>
      <p>Ici les paramêtres pour Mer & Océans</p>
    </div>
  );
}

SeaOceanSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
