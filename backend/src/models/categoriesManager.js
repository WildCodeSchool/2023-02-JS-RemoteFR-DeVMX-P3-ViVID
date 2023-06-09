const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  insert(category) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      category.name,
    ]);
  }

  update(category) {
    return this.database.query(`update ${this.table} set name = ?`, [
      category.name,
    ]);
  }
}

module.exports = CategoriesManager;
