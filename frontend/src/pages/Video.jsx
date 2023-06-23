import { useEffect, useState } from "react";
import axios from "axios";
import play from "../assets/play.png";

export default function Video(videoid) {
  const [video, setVideo] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos/${videoid}`)
      .then(([res]) => {
        setVideo(res[0].json());
        console.warn(res);
      })
      .catch((error) => console.warn(error.response.data));
  }, []);

  return (
    <div className="video">
      <img src={video.cover_img} alt={video.title} />
      <div className="buttons">
        <button type="button">
          <img src={play} alt="play" />
        </button>
        {/* <button type="button">
          <i>icone</i>
        </button> */}
      </div>
    </div>
  );
}
