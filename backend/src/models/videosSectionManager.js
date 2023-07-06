const AbstractManager = require("./AbstractManager");

class VideosSectionManager extends AbstractManager {
  constructor() {
    super({ table: "video_section" });
  }

  insert(section) {
    return this.database.query(
      `insert into ${this.table} (section_id, video_id) values (?, ?)`,
      [section.section_id, section.video_id]
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
