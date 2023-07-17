import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

import "./grid.scss";

export default function Grid({ categoryId }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (categoryId === 1) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
        .then((res) => setVideos(res.data))
        .catch((err) => console.error(err));
    } else {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/videosByCategory/${categoryId}`
        )
        .then((res) => setVideos(res.data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="grid">
      {videos &&
        videos.map((vid) => (
          <Link className="card" key={vid.id} to={`/videos/${vid.id}`}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${vid.thumbnail}`}
              alt={vid.title}
            />
            <h2>{vid.title}</h2>
          </Link>
        ))}
    </div>
  );
}

Grid.propTypes = {
  categoryId: PropTypes.arrayOf(PropTypes.number).isRequired,
};
