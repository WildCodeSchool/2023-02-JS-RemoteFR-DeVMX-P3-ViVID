import PropTypes from "prop-types";
import "./categoriesSettings.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminGrid from "./AdminGrid";

export default function CategoriesSettings({ tab }) {
  const [sections, setSections] = useState([]);
  const [videos, setVideos] = useState([]);
  const [addSection, setAddSection] = useState(1);

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
        .post(`${import.meta.env.VITE_BACKEND_URL}/videos/videosByCategory`, {
          category_id: tab,
        })
        .then((res) => setVideos(res.data))
        .catch((err) => console.error(err));
    }
  }, [tab]);

  const postChoices = () => {};

  return (
    <form onSubmit={() => postChoices}>
      <div key={1} className="section1">
        <label htmlFor="displayTypes">Type d'affichage</label>
        <select name="displayTypes" id="displayTypes">
          <option value="">-- Select --</option>
          {sections.map((section) => (
            <option key={section.id} value={section.section}>
              {section.section}
            </option>
          ))}
        </select>
        <AdminGrid videos={videos} />
      </div>

      <div key={2} className={addSection === 2 ? "section2" : "hide"}>
        <label htmlFor="displayTypes">Type d'affichage</label>
        <select name="displayTypes" id="displayTypes">
          <option value="">-- Select --</option>
          {sections.map((section) => (
            <option key={section.id} value={section.section}>
              {section.section}
            </option>
          ))}
        </select>
        <AdminGrid videos={videos} />
      </div>
      <button type="button" onClick={() => setAddSection(addSection + 1)}>
        Ajouter une section
      </button>
      <button type="submit">Valider</button>
    </form>
  );
}

CategoriesSettings.propTypes = {
  tab: PropTypes.number.isRequired,
};
