const AbstractManager = require("./AbstractManager");

class usersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  findUser(user) {
    return this.database.query(
      `SELECT id, firstname, lastname, password, role, inscription_date FROM ${this.table} WHERE email = ?`,
      [user.email]
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, role, inscription_date) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.role,
        user.inscription_date,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, password = ?, role = ?, inscription_date = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.role,
        user.inscription_date,
        user.id,
      ]
    );
  }
}

module.exports = usersManager;
