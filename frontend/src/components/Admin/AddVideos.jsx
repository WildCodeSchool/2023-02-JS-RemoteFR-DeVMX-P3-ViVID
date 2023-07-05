import PropTypes from "prop-types";

import "./addVideos.scss";

export default function AddVideos({ tab }) {
  // axios.post withCrednetials: true
  return (
    <div className={tab === 1 ? "display" : "hide"} id="addVideo">
      <p className="pAddVideo">Ici les paramêtres pour ajouter une vidéo</p>
      <p>Ici les paramêtres pour ajouter une vidéo</p>
      <p>Ici les paramêtres pour ajouter une vidéo</p>
      <p>Ici les paramêtres pour ajouter une vidéo</p>
      <p>Ici les paramêtres pour ajouter une vidéo</p>
    </div>
  );
}

AddVideos.propTypes = {
  tab: PropTypes.number.isRequired,
};
