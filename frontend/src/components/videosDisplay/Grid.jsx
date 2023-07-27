import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import cadena from "../../assets/cadenas.png";
import "./grid.scss";

const categoryHeadings = {
  1: "Selection pour vous",
  2: "Selection pour vous dans Ciel & Nuages",
  3: "Selection pour vous dans Montagnes",
  4: "Selection pour vous dans Forêt",
  5: "Selection pour vous dans Mer & Océans",
  6: "Selection pour vous dans Urbain",
  7: "Selection pour vous dans Champ",
};

export default function Grid({ categoryId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          categoryId === 1
            ? `${import.meta.env.VITE_BACKEND_URL}/videos`
            : `${
                import.meta.env.VITE_BACKEND_URL
              }/videosByCategory/${categoryId}`;
        const response = await axios.get(url);
        setVideos(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [categoryId]);

  return (
    <>
      {Object.keys(categoryHeadings).map((key) => (
        <h3
          key={key}
          className={categoryId === parseInt(key, 10) ? "showtext" : "hide"}
        >
          {categoryHeadings[key]}
        </h3>
      ))}
      <div className="grid">
        {videos &&
          videos.map((vid) => (
            <div key={vid.id} className="private">
              <button
                type="button"
                className={vid.is_public === 0 ? "showCadenaBtn" : "hide"}
              >
                <img src={cadena} alt="cadena" />
              </button>
              <Link className="card" to={`/videos/${vid.id}`}>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${vid.thumbnail}`}
                  alt={vid.title}
                />
                <h2>{vid.title}</h2>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

Grid.propTypes = {
  categoryId: PropTypes.number.isRequired,
};
