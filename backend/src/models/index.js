require("dotenv").config();

const mysql = require("mysql2/promise");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

const models = {};

const UsersManager = require("./UsersManager");
const AuthManager = require("./AuthManager");

const VideosManager = require("./VideosManager");
const CategoriesManager = require("./categoriesManager");
const SectionsManager = require("./sectionsManager");
const VideosSectionManager = require("./videosSectionManager");
const VideosCategoriesManager = require("./videosCategoriesManager");

models.videos = new VideosManager();
models.videos.setDatabase(pool);

models.categories = new CategoriesManager();
models.categories.setDatabase(pool);

models.users = new UsersManager();
models.auth = new AuthManager();

models.users.setDatabase(pool);
models.auth.setDatabase(pool);

models.sections = new SectionsManager();
models.sections.setDatabase(pool);

models.videosSection = new VideosSectionManager();
models.videosSection.setDatabase(pool);

models.videoCategory = new VideosCategoriesManager();
models.videoCategory.setDatabase(pool);

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
