import AbstractRepository from "./AbstractRepository.js";

class ProductRepository extends AbstractRepository {
  constructor() {
    super({ table: "products" });
  }

  async getProducts() {
    try {
      const [rows] = await this.database.query("SELECT * FROM products");
      return rows;
    } catch (err) {
      console.error("Erreur lors de la requête:", err);
      throw err;
    }
  }
}

export default ProductRepository;
