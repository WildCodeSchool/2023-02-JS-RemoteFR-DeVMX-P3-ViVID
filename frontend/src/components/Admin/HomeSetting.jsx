import PropTypes from "prop-types";

import "./homeSetting.scss";

export default function HomeSetting({ tab }) {
  return (
    <div className={tab === 2 ? "display" : "hide"}>
      <p>Ici les paramêtres de l'accueil</p>
      <p>Ici les paramêtres de l'accueil</p>
      <p>Ici les paramêtres de l'accueil</p>
      <p>Ici les paramêtres de l'accueil</p>
      <p>Ici les paramêtres de l'accueil</p>
    </div>
  );
}

HomeSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
