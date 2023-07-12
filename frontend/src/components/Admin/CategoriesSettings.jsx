import PropTypes from "prop-types";
import "./categoriesSettings.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminGrid from "./AdminGrid";

export default function CategoriesSettings({ tab }) {
  const [sections, setSections] = useState([]);
  const [chosenSection, setChosenSection] = useState();

  const [videos, setVideos] = useState([]);
  const [checkedVideos, setCheckedVideos] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sections`)
      .then((result) => setSections(result.data))
      .catch((err) => console.error(err));
  }, [tab]);

  useEffect(() => {
    if (tab === 1) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
        .then((result) => setVideos(result.data))
        .catch((err) => console.error(err));
    } else {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/videosByCategory/${tab}`)
        .then((res) => setVideos(res.data))
        .catch((err) => console.error(err));
    }
  }, [tab]);

  const postChoices = (e) => {
    e.preventDefault();
    checkedVideos.map((vid) =>
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/videosSections`, {
          video_id: vid.id,
          section_id: chosenSection,
          category_id: tab,
        })
        .then((res) => {
          if (res.status === 201) setMsg("done");
        })
        .catch((err) => {
          console.error(err);
          setMsg("error");
        })
    );

    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

  return (
    <form onSubmit={(e) => postChoices(e)}>
      <div key={1} className="section1">
        <label htmlFor="displayTypes">Type d'affichage</label>
        <select
          name="displayTypes"
          id="displayTypes"
          defaultValue="--Select--"
          onChange={(e) => {
            setChosenSection(e.target.value);
          }}
        >
          <option value="">-- Select --</option>
          {sections.slice(1).map((section) => (
            <option key={section.id} value={section.id}>
              {section.section}
            </option>
          ))}
        </select>
        <AdminGrid
          videos={videos}
          checkedVideos={checkedVideos}
          setCheckedVideos={setCheckedVideos}
        />
      </div>
      <button type="submit">Valider</button>

      <p className={msg === "done" ? "display" : "hide"}>
        Vos modifications sont prises en compte
      </p>
      <p className={msg === "error" ? "display" : "hide"}>Error ! Reéssayez </p>
    </form>
  );
}

CategoriesSettings.propTypes = {
  tab: PropTypes.number.isRequired,
};
