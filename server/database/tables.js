import ProductRepository from "./models/ProductRepository.js";
import UserRepository from "./models/UserRepository.js";

const tables = {};

tables.users = new UserRepository();
tables.products = new ProductRepository();

export default new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(`tables.${prop} is not defined.`);
  },
});
