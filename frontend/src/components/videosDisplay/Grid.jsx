import { useEffect, useState } from "react";
import "./grid.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

export default function Grid({ category }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/videos/videosByCategory`, {
        category_id: category,
      })
      .then((res) => setVideos(res.data))
      .catch((err) => console.error(err));
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
  category: PropTypes.number.isRequired,
};
