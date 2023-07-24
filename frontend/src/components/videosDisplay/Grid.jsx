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
    <>
      <h3 className={categoryId === 1 ? "showtext" : "hide"}>
        Selection pour vous
      </h3>
      <h3 className={categoryId === 2 ? "showtext" : "hide"}>
        Selection pour vous dans Ciel & Nuages
      </h3>
      <h3 className={categoryId === 3 ? "showtext" : "hide"}>
        Selection pour vous dans Montagnes
      </h3>
      <h3 className={categoryId === 4 ? "showtext" : "hide"}>
        Selection pour vous dans Forêt
      </h3>
      <h3 className={categoryId === 5 ? "showtext" : "hide"}>
        Selection pour vous dans Mer & Océans
      </h3>
      <h3 className={categoryId === 6 ? "showtext" : "hide"}>
        Selection pour vous dans Urbain
      </h3>
      <h3 className={categoryId === 7 ? "showtext" : "hide"}>
        Selection pour vous dans Champ
      </h3>
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
    </>
  );
}

Grid.propTypes = {
  categoryId: PropTypes.arrayOf(PropTypes.number).isRequired,
};
