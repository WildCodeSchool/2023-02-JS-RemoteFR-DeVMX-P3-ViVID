import "./grid.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Grid() {
  const videoIds = { video: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] };
  const [gridVideos, setGridVideos] = useState([]);

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/videos/loadVideos`, videoIds)
      .then((res) => {
        setGridVideos(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid">
      {gridVideos &&
        gridVideos.map((vid) => (
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
