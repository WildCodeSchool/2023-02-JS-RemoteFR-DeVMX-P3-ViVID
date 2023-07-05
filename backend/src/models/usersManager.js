const AbstractManager = require("./AbstractManager");

class usersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  findUser(user) {
    return this.database.query(
      `SELECT id, firstname, lastname, email, hpassword, role_id, inscription_date FROM ${this.table} WHERE email = ?`,
      [user.email]
    );
  }

  selectByEmail(email) {
    return this.database.query(
      "select id, firstname, lastname, hpassword, role_id, inscription_date from users where email = ?",
      [email]
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hpassword, role_id, inscription_date) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hpassword,
        user.role_id,
        user.inscription_date,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hpassword = ?, role_id = ?, inscription_date = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hpassword,
        user.role_id,
        user.inscription_date,
        user.id,
      ]
    );
  }
}

module.exports = usersManager;
