import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/VideoPlayer.scss";
import VideoPlayer from "../components/VideoPlayer";

export default function Video(videoid) {
  const [video, setVideo] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos/${videoid}`)
      .then(([res]) => {
        console.warn(res);
        setVideo(res[0].json());
        console.warn(res);
      })
      .catch((error) => console.warn(error.response.data));
  }, []);

  return (
    <div className="video">
      <img src={video.thumbnail} alt={video.title} />
      <VideoPlayer />
    </div>
  );
}
