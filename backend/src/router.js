const express = require("express");
const multer = require("multer");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const videosControllers = require("./controllers/videosControllers");
const categoriesControllers = require("./controllers/categoriesControllers");
const sectionsControllers = require("./controllers/sectionsControllers");
const authControllers = require("./controllers/authControllers");
const videosSectionControllers = require("./controllers/videosSectionControllers");
const videosCategoriesControllers = require("./controllers/videosCategoriesControllers");

const uploadVideo = require("./services/uploadVideo");
const uploadImg = require("./services/uploadImg");

const { hashPassword } = require("./services/auth");
const { checkIds, verifyCookie } = require("./middlewares/auth");

router.get("/users", usersControllers.browse);
router.get("/users/:id", verifyCookie, usersControllers.read);
router.put("/users/:id", hashPassword, usersControllers.edit);
router.post("/users", hashPassword, usersControllers.add);
router.post("/login", checkIds, authControllers.login);

router.delete("/users/:id", usersControllers.destroy);

router.get("/videos", videosControllers.browse);
router.get("/videos/:id", videosControllers.read);
router.post("/videos", videosControllers.add);
router.post("/loadVideos", videosControllers.getByIds);

router.get("/videosByCategory/:id", videosControllers.getByCategory);
router.put("/videos/:id", videosControllers.edit);
router.delete("/videos/:id", videosControllers.destroy);

const uploadv = multer({ dest: "./public/uploads/videos" });
const uploadi = multer({ dest: "./public/uploads/images" });

router.post("/api/image", uploadi.single("thumbnail"), uploadImg.postFile);
router.post("/api/video", uploadv.single("video"), uploadVideo.postFile);

router.get("/favorites", videosControllers.readFavorites);
router.get("/favorites", videosControllers.readFavorites);

router.get("/categories", categoriesControllers.browse);
router.get("/categories/:id", categoriesControllers.read);
router.put("/categories/:id", categoriesControllers.edit);
router.post("/categories", categoriesControllers.add);
router.delete("/categories/:id", categoriesControllers.destroy);

router.get("/sections", sectionsControllers.browse);
router.get("/sections/:id", sectionsControllers.read); // delete if not used

router.get("/videosSections/:id", videosSectionControllers.read);
router.post("/videosSections", videosSectionControllers.add);

router.get("/videosCategories/:id", videosCategoriesControllers.read);
router.post("/videosCategories", videosCategoriesControllers.add);
router.delete("/videosCategories/:id", videosCategoriesControllers.destroy);

module.exports = router;
