import { useState } from "react";
import "./adminGrid.scss";
import PropTypes from "prop-types";

export default function AdminGrid({ videos }) {
  const [checkedVideos, setCheckedVideos] = useState([]);

  const handleCheckedItems = (e) => {
    if (e.target.checked) {
      setCheckedVideos((oldArray) => [
        ...oldArray,
        videos.filter((video) => video.id === parseInt(e.target.value, 10)),
      ]);
    } else {
      setCheckedVideos([
        ...checkedVideos.filter(
          (video) => video.id !== parseInt(e.target.value, 10)
        ),
      ]);
    }
  };

  return (
    <div className="grid">
      {videos &&
        videos.map((vid) => (
          <div className="card" key={vid.id}>
            <input
              type="checkbox"
              id={`checkbox${vid.id}`}
              value={vid.id}
              onChange={(e) => handleCheckedItems(e)}
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
  videos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
