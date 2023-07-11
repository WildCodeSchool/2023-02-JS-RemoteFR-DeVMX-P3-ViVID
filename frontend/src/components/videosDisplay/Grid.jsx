import { useEffect, useState } from "react";
import "./grid.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Grid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
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
