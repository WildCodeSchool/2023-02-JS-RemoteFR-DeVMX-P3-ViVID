import PropTypes from "prop-types";
import "./categoriesSettings.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FieldSetting({ tab }) {
  const [sections, setSections] = useState([]);
  console.warn(tab); // delete
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sections`)
      .then((result) => setSections(result.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sections`)
      .then((result) => setSections(result.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <form>
      <div key={1}>
        <label htmlFor="displayTypes">Type d'affichage</label>
        <select name="displayTypes" id="displayTypes">
          <option value="">-- Select --</option>
          {sections.map((section) => (
            <option key={section.id} value={section.type}>
              {section.type}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Valider</button>
    </form>
  );
}

FieldSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
