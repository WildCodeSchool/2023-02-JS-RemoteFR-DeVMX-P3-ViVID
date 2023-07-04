const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const videosControllers = require("./controllers/videosControllers");
const categoriesControllers = require("./controllers/categoriesControllers");
const sectionsControllers = require("./controllers/sectionsControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);
router.post("/login", usersControllers.getUserByEmail);
router.post("/login", usersControllers.login);
router.delete("/users/:id", usersControllers.destroy);

router.get("/videos", videosControllers.browse);
router.get("/videos/:id", videosControllers.read);
router.post("/videos/loadVideos", videosControllers.getByIds); // delete if not used
router.post("/videos/videosBySection", videosControllers.getBySection);

router.put("/videos/:id", videosControllers.edit);
router.post("/videos", videosControllers.add);
router.delete("/videos/:id", videosControllers.destroy);

router.get("/favorites", videosControllers.readFavorites);
router.get("/favorites", videosControllers.readFavorites);

router.get("/categories", categoriesControllers.browse);
router.get("/categories/:id", categoriesControllers.read);
router.put("/categories/:id", categoriesControllers.edit);
router.post("/categories", categoriesControllers.add);
router.delete("/categories/:id", categoriesControllers.destroy);

router.get("/sections", sectionsControllers.browse);
router.get("/sections/:id", sectionsControllers.read); // delete if not used
router.get("/sectionChoice", sectionsControllers.getByCategoryAndPosition);

module.exports = router;
