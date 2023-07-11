const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  insert(category) {
    return this.database.query(
      `insert into ${this.table} (category) values (?)`,
      [category]
    );
  }

  update(category) {
    return this.database.query(
      `update ${this.table} set category = ? where id = ?`,
      [category.category, category.id]
    );
  }

  deleteById(id) {
    return this.database.query(
      `delete ${this.table}, video_category from ${this.table}
    inner join video_category vc
    on ${this.table}.id = vc.category_id
    where ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = CategoriesManager;
