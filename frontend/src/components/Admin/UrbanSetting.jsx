import PropTypes from "prop-types";

import "./urbanSetting.scss";

export default function UrbanSetting({ tab }) {
  return (
    <div className={tab === 7 ? "display" : "hide"}>
      <p>Ici les paramêtres pour Urbain</p>
      <p>Ici les paramêtres pour Urbain</p>
      <p>Ici les paramêtres pour Urbain</p>
      <p>Ici les paramêtres pour Urbain</p>
      <p>Ici les paramêtres pour Urbain</p>
    </div>
  );
}

UrbanSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
