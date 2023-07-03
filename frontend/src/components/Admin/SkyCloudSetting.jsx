import PropTypes from "prop-types";

import "./skyCloudSetting.scss";

export default function SkyCloudSetting({ tab }) {
  return (
    <div className={tab === 3 ? "display" : "hide"}>
      <p>Ici les paramêtres pour Ciel&Nuages</p>
      <p>Ici les paramêtres pour Ciel&Nuages</p>
      <p>Ici les paramêtres pour Ciel&Nuages</p>
      <p>Ici les paramêtres pour Ciel&Nuages</p>
      <p>Ici les paramêtres pour Ciel&Nuages</p>
    </div>
  );
}

SkyCloudSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
