import { useState } from "react";
import "./adminGrid.scss";
import PropTypes from "prop-types";

export default function AdminGrid({ setVideos, videos }) {
  const [updateState, setUpdateState] = useState(false);

  const handleCheckedItems = (id) => {
    const allVideos = videos;
    const ind = allVideos.findIndex((x) => x.id === id);
    allVideos[ind].isChecked = !allVideos[ind].isChecked;
    setVideos(allVideos);
    setUpdateState(!updateState);
  };

  return (
    <div className="grid">
      {videos &&
        videos.map((vid) => (
          <div className="cardForm" key={vid.id}>
            <input
              type="checkbox"
              id={`checkbox${vid.id}`}
              checked={vid.isChecked}
              onChange={() => handleCheckedItems(vid.id)}
            />

            <label htmlFor={`checkbox${vid.id}`}>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${vid.thumbnail}`}
                alt={vid.title}
              />
              <h2>{vid.title}</h2>
            </label>
          </div>
        ))}
    </div>
  );
}

AdminGrid.propTypes = {
  setVideos: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
