import PropTypes from "prop-types";
import axios from "axios";
import { useRef, useState } from "react";
import "./addVideos.scss";

export default function AddVideos({ categories }) {
  const inputVideoRef = useRef();
  const inputImgRef = useRef();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("00:00:00");
  const [categoryId, setCategoryId] = useState(0);
  const [msg, setMsg] = useState("");

  const posting = (e) => {
    e.preventDefault();
    console.info(categoryId); // not used yet
    const vidFormData = new FormData();
    vidFormData.append("video", inputVideoRef.current.files[0]);

    const imgFormData = new FormData();
    imgFormData.append("thumbnail", inputImgRef.current.files[0]);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/video`, vidFormData)
      .then((res) => {
        if (res.status === 201) {
          inputVideoRef.current = res.data;

          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/api/image`, imgFormData)
            .then((result) => {
              if (result.status === 201) {
                inputImgRef.current = res.data;

                axios
                  .post(`${import.meta.env.VITE_BACKEND_URL}/videos`, {
                    title,
                    duration: time,
                    views_count: 0,
                    upload_date: new Date().toISOString().slice(0, 10),
                    thumbnail: inputImgRef.current,
                    video: inputVideoRef.current,
                  })
                  .then((response) => {
                    if (response.status === 201) setMsg("done");
                  })
                  .catch((err) => {
                    console.error(err);
                    setMsg("error");
                  });
              }
            })
            .catch((err) => {
              console.error(err);
              setMsg("error");
            });
        }
      })
      .catch((err) => {
        console.error(err);
        setMsg("error");
      });
  };

  return (
    <div id="addVideo">
      <form
        className="form"
        encType="multipart/form-data"
        onSubmit={(e) => posting(e)}
      >
        <label htmlFor="video">Video</label>
        <input type="file" id="video" ref={inputVideoRef} required />

        <label htmlFor="thumbnail">Thumbnail</label>
        <input type="file" id="thumbnail" ref={inputImgRef} required />

        <label htmlFor="title">Titre</label>
        <textarea
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="duration">Durée</label>
        <input
          type="text"
          id="duration"
          pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
          value={time}
          title="Durée format hh:mm:ss"
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <label htmlFor="categorie">Catégorie</label>
        <select
          name="categorie"
          id="categorie"
          onChange={(e) => setCategoryId(e.target.key)}
          required
        >
          <option value="">--Select--</option>
          {categories.slice(1).map((categ) => (
            <option key={categ.id} value={categ.category}>
              {categ.category}
            </option>
          ))}
        </select>

        <button type="submit">Valider</button>
      </form>
      <p className={msg === "done" ? "display" : "hide"}>
        Video ajoutée avec succés
      </p>
      <p className={msg === "error" ? "display" : "hide"}>Error ! Reéssayez </p>
    </div>
  );
}

AddVideos.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};
