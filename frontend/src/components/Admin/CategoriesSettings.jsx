import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import AdminGrid from "./AdminGrid";

import "./categoriesSettings.scss";

export default function CategoriesSettings({ tab }) {
  const [chosenSection, setChosenSection] = useState();
  const [msg, setMsg] = useState("");
  const [previousSection, setPreviousSection] = useState();
  const [sections, setSections] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sections`)
      .then((result) => setSections(result.data))
      .catch((err) => console.error(err));
  }, [tab]);

  useEffect(() => {
    const data = [];
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videosSections/${tab}`)
      .then((result) => {
        if (result.data.length) {
          setPreviousSection(result.data[0].section_id);
          for (const i of result.data) {
            data.push(i.video_id);
          }
        }
      })
      .catch((err) => console.error(err));

    if (tab === 1) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
        .then((result) => {
          result.data.forEach((vid) => {
            if (data.includes(vid.id)) {
              vid.isChecked = true;
            } else {
              vid.isChecked = false;
            }
          });
          setVideos(result.data);
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/videosByCategory/${tab}`)
        .then((res) => {
          res.data.forEach((vid) => {
            if (data.includes(vid.id)) {
              vid.isChecked = true;
            } else {
              vid.isChecked = false;
            }
          });
          setVideos(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [tab]);

  const postChoices = (e) => {
    e.preventDefault();
    console.warn(previousSection);
    videos.map(
      (vid) =>
        vid.isChecked &&
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
    <form className="newSection" onSubmit={(e) => postChoices(e)}>
      <label htmlFor="displayTypes" className="sectionLabel">
        Type d'entête
      </label>
      <select
        name="displayTypes"
        id="displayTypes"
        defaultValue="-- Select --"
        onChange={(e) => {
          setChosenSection(e.target.value);
        }}
      >
        {previousSection ? (
          <option value={previousSection}>
            {sections[previousSection - 1].section}
          </option>
        ) : (
          <option value="">-- Select --</option>
        )}
        {sections.slice(1).map((section) => (
          <option key={section.id} value={section.id}>
            {section.section}
          </option>
        ))}
      </select>

      <p className="help">Cochez les videos à afficher</p>
      <AdminGrid setVideos={setVideos} videos={videos} />
      <button type="submit" className="valid-btn">
        Valider
      </button>
      <p className={msg === "done" ? "display" : "hide"}>
        Vos modifications ont été prises en compte
      </p>

      <p className={msg === "error" ? "display" : "hide"}>
        Erreur ! Reéssayez{" "}
      </p>
    </form>
  );
}

CategoriesSettings.propTypes = {
  tab: PropTypes.number.isRequired,
};
