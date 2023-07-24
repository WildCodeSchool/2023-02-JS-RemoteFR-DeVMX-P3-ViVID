const AbstractManager = require("./AbstractManager");

class VideosSectionManager extends AbstractManager {
  constructor() {
    super({ table: "video_section" });
  }

  findByCategory(categoryId) {
    return this.database.query(
      `select video_id, section_id from ${this.table} where category_id = ?`,
      [categoryId]
    );
  }

  insert(data) {
    return this.database.query(
      `insert into ${this.table} (video_id, section_id, category_id) values (?, ?, ?)`,
      [data.video_id, data.section_id, data.category_id]
    );
  }

  deleteBycategory(data) {
    return this.database.query(
      `delete from ${this.table} where video_id = ? and category_id = ?`,
      [data.video_id, data.category_id]
    );
  }
}

module.exports = VideosSectionManager;
