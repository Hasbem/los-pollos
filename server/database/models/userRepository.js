import AbstractRepository from "./AbstractRepository.js";

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

  async insert(user) {
    const { name, email, hashedPassword } = user;
    const query =
      "INSERT INTO users (name, email, hashedPassword) VALUES (?, ?, ?)";
    const values = [name, email, hashedPassword];

    const [result] = await this.database.query(query, values);
    return result;
  }

  async delete(userId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [userId]
    );

    return result;
  }
}

export default UserRepository;
