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

  update(section) {
    return this.database.query(
      `update ${this.table} set section_id = ?, video_id = ? where id = ?`,
      [section.section_id, section.video_id, section.id]
    );
  }
}

module.exports = VideosSectionManager;
