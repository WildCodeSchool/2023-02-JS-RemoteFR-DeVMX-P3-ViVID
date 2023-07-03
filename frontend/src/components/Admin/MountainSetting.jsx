import PropTypes from "prop-types";

import "./mountainSetting.scss";

export default function MountainSetting({ tab }) {
  return (
    <div className={tab === 4 ? "display" : "hide"}>
      <p>Ici les paramêtres pour Montagnes</p>
      <p>Ici les paramêtres pour Montagnes</p>
      <p>Ici les paramêtres pour Montagnes</p>
      <p>Ici les paramêtres pour Montagnes</p>
      <p>Ici les paramêtres pour Montagnes</p>
    </div>
  );
}

MountainSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
