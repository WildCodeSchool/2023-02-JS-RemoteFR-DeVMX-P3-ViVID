const AbstractManager = require("./AbstractManager");

class VideosSectionManager extends AbstractManager {
  constructor() {
    super({ table: "video_category" });
  }

  getByCategoryId(id) {
    return this.database.query(
      `select * from  ${this.table} where category_id = ?`,
      [id]
    );
  }

  insert(ids) {
    return this.database.query(
      `insert into ${this.table} (category_id, video_id) values (?, ?)`,
      [ids.category_id, ids.video_id]
    );
  }

  deleteByVideoId(id) {
    return this.database.query(`delete from ${this.table} where video_id = ?`, [
      id,
    ]);
  }
}

module.exports = VideosSectionManager;
