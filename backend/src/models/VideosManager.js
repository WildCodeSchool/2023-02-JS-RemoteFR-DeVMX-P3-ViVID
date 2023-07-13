const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
  constructor() {
    super({ table: "videos" });
  }

  findFavorites(id) {
    return this.database.query(
      `select * from ${this.table}
    inner join favorites on videos.id = favorites.video_id
    where favorites.user_id = ?`,
      [id]
    );
  }

  getMultipleVideos(ids) {
    // console.log(ids);

    let sqlRequest = `select * from ${this.table} where id in (?`;
    for (let i = 0; i <= ids.length - 2; i += 1) {
      sqlRequest += `, ?`;
    }
    sqlRequest += ")";
    return this.database.query(sqlRequest, ids);
  }

  // getMultipleVideos(ids) {
  //   console.log(ids);
  //   return this.database.query(
  //     `select * from ${this.table} where id in (?)`,
  //     ids
  //   );
  // }

  findbySection(info) {
    return this.database.query(
      `select * from ${this.table}
    inner join section_video on videos.id = section_video.video_id
    inner join video_category on videos.id = video_category.video_id
    where section_id = ? and category_id = ?`,
      [info.section_id, info.category_id]
    );
  }

  findbyCategory(categoryId) {
    return this.database.query(
      `select * from ${this.table}
    inner join video_category on videos.id = video_category.video_id
    where category_id = ?`,
      [categoryId]
    );
  }

  insert(data) {
    return this.database.query(
      `insert into ${this.table} (title, duration, views_count, upload_date, thumbnail, video, is_public) 
      values (?, ?, ?, ?, ?, ?)`,
      [
        data.title,
        data.duration,
        data.views_count,
        data.upload_date,
        `/uploads/images/${data.thumbnail}`,
        `/uploads/videos/${data.video}`,
        data.is_public,
      ]
    );
  }

  update(video) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [video.title, video.id]
    );
  }
}

module.exports = VideosManager;
