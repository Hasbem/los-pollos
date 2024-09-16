const tables = require("../../database/tables");

const getProducts = async (req, res) => {
  try {
    const products = await tables.products.getProducts();
    res.json(products);
  } catch (err) {
    console.error("Erreur lors de la récupération des produits:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getProducts };
