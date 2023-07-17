import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Videos.scss";

export default function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState({
    title: "toto",
    video: "tata",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos/${id}`)
      .then((res) => {
        setVideo(res.data[0]);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="video">
      <video
        className="video-control"
        controls
        width="600"
        height="400"
        src={`${import.meta.env.VITE_BACKEND_URL}/${video.video}`}
        type="video/mp4"
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
