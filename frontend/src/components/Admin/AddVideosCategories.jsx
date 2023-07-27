import { useEffect, useRef, useState } from "react";
import axios from "axios";

import "./addVideosCategories.scss";

export default function AddVideosCategories() {
  const inputVideoRef = useRef();
  const inputImgRef = useRef();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("00:00:00");
  const [categoryId, setCategoryId] = useState(0);
  const [isPublic, setIsPublic] = useState(0);
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryMsg, setCategoryMsg] = useState("");
  // const [modif, setModif] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((result) => setCategories(result.data))
      .catch((err) => console.error(err));
  }, [categoryMsg]);

  const postingVideo = (e) => {
    e.preventDefault();
    const vidFormData = new FormData();
    vidFormData.append("video", inputVideoRef.current.files[0]);

    const imgFormData = new FormData();
    imgFormData.append("thumbnail", inputImgRef.current.files[0]);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/video`, vidFormData)
      .then((res) => {
        if (res.status === 201) {
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/api/image`, imgFormData)
            .then((result) => {
              if (result.status === 201) {
                axios
                  .post(`${import.meta.env.VITE_BACKEND_URL}/videos`, {
                    title,
                    duration: time,
                    views_count: 0,
                    upload_date: new Date().toISOString().slice(0, 10),
                    thumbnail: result.data,
                    video: res.data,
                    is_public: isPublic,
                  })
                  .then((response) => {
                    if (response.status === 201) {
                      axios
                        .post(
                          `${
                            import.meta.env.VITE_BACKEND_URL
                          }/videosCategories`,
                          { video_id: response.data, category_id: categoryId }
                        )
                        .then((re) => {
                          if (re.status === 201) setMsg("done");
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
        }
      })
      .catch((err) => {
        console.error(err);
        setMsg("error");
      });

    inputVideoRef.current.value = "";
    inputImgRef.current.value = "";
    setTitle("");
    setTime("00:00:00");
    setCategoryId(0);
    setTimeout(() => {
      setMsg("");
    }, 2000);
  };

  const deleteMsg = () => {
    setTimeout(() => {
      setCategoryMsg("");
    }, 1500);
  };

  const postingCategory = (e) => {
    e.preventDefault();
    if (newCategory === "") setCategoryMsg("error");
    else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/categories`, {
          category: newCategory,
        })
        .then((res) => {
          if (res.status === 201) setCategoryMsg("done");
        })
        .catch((err) => {
          console.error(err);
          setCategoryMsg("error");
        });
    }

    setNewCategory("");
    deleteMsg();
  };

  const changeCategoryName = (e) => {
    e.preventDefault();

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/categories/${e.target.value}`, {
        category: categoryName,
      })
      .then((res) => {
        if (res.status === 204) setCategoryMsg("done");
      })
      .catch((err) => {
        console.error(err);
        setCategoryMsg("error");
      });

    deleteMsg();
  };

  const deleteCategory = (e) => {
    e.preventDefault();

    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/categories/${e.target.value}`
      )
      .then((res) => {
        if (res.status === 204) setCategoryMsg("done");
      })
      .catch((err) => {
        console.error(err);
        setCategoryMsg("error");
      });

    deleteMsg();
  };

  return (
    <div className="adminWrapper">
      <div className="addVideo" id="addVideo">
        <form className="formAddVideo" encType="multipart/form-data">
          <h2 className="titleAddVideo">Ajouter une video</h2>

          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="video">Video</label>
          <input type="file" id="video" ref={inputVideoRef} required />

          <label htmlFor="thumbnail">Thumbnail</label>
          <input type="file" id="thumbnail" ref={inputImgRef} required />

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
            defaultValue="--Select--"
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
            required
          >
            <option value="--Select--">--Select--</option>
            {categories.slice(1).map((categ) => (
              <option key={categ.id} value={categ.id}>
                {categ.category}
              </option>
            ))}
          </select>

          <div id="is_public_input">
            <label htmlFor="is_public" id="is_public_label">
              Vidéo Publique
            </label>
            <input
              type="checkbox"
              id="is_public"
              value={isPublic}
              onChange={() => setIsPublic(!isPublic)}
              required
            />
          </div>

          <button
            type="submit"
            onClick={(e) => postingVideo(e)}
            style={{
              margin: "10px auto",
              width: "50%",
              height: "40px",
              border: "1px solid gray",
              borderRadius: "30px",
              background: "var(--goldColor)",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              color: "white",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Valider
          </button>
        </form>

        <p className={msg === "done" ? "display" : "hide"}>
          Video ajoutée avec succés
        </p>

        <p className={msg === "error" ? "display" : "hide"}>
          Erreur ! Reéssayez{" "}
        </p>
      </div>

      <div className="CategoryManip" id="CategoryManip">
        <form className="formAddCategories" encType="multipart/form-data">
          <h2 className="titleModifyCategories">Modification de catégories</h2>

          <ul className="ulAddCategories">
            {categories.slice(1).map((category) => (
              <li className="liAddCategories">
                <input
                  type="text"
                  id="category"
                  key={category.id}
                  defaultValue={category.category}
                  onChange={(e) => setCategoryName(e.target.value)}
                />

                <button
                  className="btnValidateAndDelete"
                  type="button"
                  value={category.id}
                  onClick={(e) => changeCategoryName(e)}
                >
                  ✓
                </button>

                <button
                  className="btnValidateAndDelete"
                  type="button"
                  value={category.id}
                  onClick={(e) => deleteCategory(e)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>

          <div className="addCategoriesContainer">
            <input
              type="text"
              id="newCategory"
              placeholder="Ajouter une categorie"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              style={{
                fontSize: "1rem",
                margin: "40px 10px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "20px",
                outline: "none",
              }}
            />

            <button
              className="add_category"
              type="submit"
              onClick={(e) => postingCategory(e)}
            >
              Ajouter catégorie
            </button>
          </div>
        </form>

        <p className={categoryMsg === "done" ? "display" : "hide"}>
          Opération réussie
        </p>

        <p className={categoryMsg === "error" ? "display" : "hide"}>
          Erreur ! Reéssayez{" "}
        </p>
      </div>
    </div>
  );
}
