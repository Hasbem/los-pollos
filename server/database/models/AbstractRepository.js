import database from "../client.js";

class AbstractRepository {
  constructor({ table }) {
    if (this.constructor === AbstractRepository) {
      throw new TypeError(
        "Abstract class 'AbstractRepository' cannot be instantiated directly"
      );
    }

    this.table = table;
    this.database = database;
  }
}

export default AbstractRepository;
