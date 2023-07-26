import { useEffect, useState } from "react";
import axios from "axios";

import AddVideosCategories from "../components/Admin/AddVideosCategories";
import CategoriesSettings from "../components/Admin/CategoriesSettings";

import "./Admin.scss";

export default function Admin() {
  const [categories, setCategories] = useState([]);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((result) => setCategories(result.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin">
      <ul className="ulAdmin">
        {categories.map((category) => (
          <li className="liAdmin" key={category.id}>
            <button
              className="btnAdmin"
              type="button"
              onClick={() => setTab(category.id)}
            >
              {category.category}
            </button>
          </li>
        ))}

        <li className="liAdmin" key={categories.length + 1}>
          <button
            className="btnAdmin"
            type="button"
            onClick={() => setTab(categories.length + 1)}
          >
            Ajout & suppression
          </button>
        </li>
      </ul>

      {tab === categories.length + 1 ? (
        <AddVideosCategories key={tab} categories={categories} />
      ) : (
        <CategoriesSettings key={tab} tab={tab} />
      )}
    </div>
  );
}
