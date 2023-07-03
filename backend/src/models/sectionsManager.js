const AbstractManager = require("./AbstractManager");

class SectionsManager extends AbstractManager {
  constructor() {
    super({ table: "sections" });
  }

  findByCategoryAndPosition(params) {
    return this.database.query(
      `get * from ${this.table} 
      inner join section_category on ${this.table}.id = section_id
      where category_id = ? and position = ?`,
      [params.category, params.position]
    );
  }

  insert(section) {
    return this.database.query(
      `insert into ${this.table} (section, isDynamic) values (?, ?)`,
      [section.name, section.isDynamic]
    );
  }
}

module.exports = SectionsManager;
