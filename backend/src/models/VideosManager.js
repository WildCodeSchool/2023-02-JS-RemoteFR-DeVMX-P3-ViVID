const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
  constructor() {
    super({ table: "videos" });
  }

  getMultipleVideos(ids) {
    let sqlRequest = `select * from ${this.table} where id in ( ?`;
    const [idsValues] = Object.values(ids);

    for (let i = 0; i <= idsValues.length - 2; i += 1) {
      sqlRequest += `, ?`;
    }
    sqlRequest += ")";
    return this.database.query(sqlRequest, idsValues);
  }

  insert(video) {
    return this.database.query(
      `insert into ${this.table} (title, duration, views_count, upload_date) values (?, ?, ?, ?)`,
      [video.title, video.duration, video.views_count, video.upload_date]
    );
  }

  update(video) {
    return this.database.query(
      `update ${this.table} set title = ?, duration = ?, views_count = ?, upload_date= ? where id = ?`,
      [
        video.title,
        video.title,
        video.duration,
        video.views_count,
        video.upload_date,
        video.id,
      ]
    );
  }
}

module.exports = VideosManager;
