import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./addVideos.scss";

export default function AddVideosCategories() {
  const inputVideoRef = useRef();
  const inputImgRef = useRef();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("00:00:00");
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState("");

  const [newCategory, setNewCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryMsg, setCategoryMsg] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((result) => setCategories(result.data))
      .catch((err) => console.error(err));
  }, [newCategory]);

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
    }, 3000);
  };

  const postingCategory = (e) => {
    e.preventDefault();

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
  };

  return (
    <div className="wrapper">
      <div id="addVideo">
        <form className="form" encType="multipart/form-data">
          <label htmlFor="video">Video</label>
          <input type="file" id="video" ref={inputVideoRef} required />

          <label htmlFor="thumbnail">Thumbnail</label>
          <input type="file" id="thumbnail" ref={inputImgRef} required />

          <label htmlFor="title">Titre</label>
          <textarea
            type="text"
            id="title"
            value={title}
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

          <button type="submit" onClick={(e) => postingVideo(e)}>
            Valider
          </button>
        </form>
        <p className={msg === "done" ? "display" : "hide"}>
          Video ajoutée avec succés
        </p>
        <p className={msg === "error" ? "display" : "hide"}>
          Error ! Reéssayez{" "}
        </p>
      </div>

      <div id="CategoryManip">
        <form className="form" encType="multipart/form-data">
          <ul>
            {categories.slice(1).map((category) => (
              <li>
                <input
                  type="text"
                  id="category"
                  key={category.id}
                  defaultValue={category.category}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <button
                  type="button"
                  value={category.id}
                  onClick={(e) => changeCategoryName(e)}
                >
                  ✓
                </button>
                <button
                  type="button"
                  value={category.id}
                  onClick={(e) => deleteCategory(e)}
                >
                  X
                </button>
              </li>
            ))}
            <li>
              <input
                type="text"
                id="newCategory"
                placeholder="Ajouter une categorie"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </li>
          </ul>
          <button type="submit" onClick={(e) => postingCategory(e)}>
            Ajouter categorie
          </button>
        </form>
        <p className={categoryMsg === "done" ? "display" : "hide"}>
          Opération réussie
        </p>
        <p className={categoryMsg === "error" ? "display" : "hide"}>
          Error ! Reéssayez{" "}
        </p>
      </div>
    </div>
  );
}