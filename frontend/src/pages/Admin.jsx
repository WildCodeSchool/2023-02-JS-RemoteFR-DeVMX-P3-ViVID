import { useEffect, useState } from "react";
import axios from "axios";
import AddVideos from "../components/Admin/AddVideos";
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
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={() => setTab(category.id)}>
              {category.category}
            </button>
          </li>
        ))}

        <li key={categories.length + 1}>
          <button type="button" onClick={() => setTab(categories.length + 1)}>
            Ajouter une vidéo
          </button>
        </li>
      </ul>

      {tab === categories.length + 1 ? (
        <AddVideos key={tab} categories={categories} />
      ) : (
        <CategoriesSettings tab={tab} />
      )}
    </div>
  );
}
