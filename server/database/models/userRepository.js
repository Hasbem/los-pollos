const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async getUsers() {
    try {
      const [rows] = await this.database.query("SELECT * FROM users");
      return rows;
    } catch (err) {
      console.error("Erreur lors de la requête:", err);
      throw err;
    }
  }

  async readWithPassword(email) {
    try {
      const [result] = await this.database.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      return result[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getUserById(id) {
    try {
      const [result] = await this.database.query(
        "SELECT * FROM users WHERE id = ?",
        [id]
      );
      return result[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async insert(users) {
    const { name, email, hashedPassword } = users;
    const query =
      "INSERT INTO user (name, email, hashedPassword) VALUES (?, ?, ?)";
    const values = [name, email, hashedPassword];

    const [result] = await this.database.query(query, values);
    return result;
  }

  async delete(userId) {
    // Execute the SQL DELETE query to retrieve a specific data by its ID
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [userId]
    );

    return result;
  }
}

module.exports = UserRepository;
