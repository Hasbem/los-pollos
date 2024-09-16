// Get variables from .env file for database connection
import mysql from "mysql2/promise";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Create a connection pool to the database
const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

client.checkConnection = async () => {
  try {
    const connection = await client.getConnection();
    console.info(`Using database ${DB_NAME}`);
    connection.release();
  } catch (error) {
    console.warn(
      "Warning: Failed to establish a database connection.",
      "Please check your database credentials in the .env file if you need a database access."
    );
    console.warn(error.message);
  }
};

// Store database name into client for further uses
client.databaseName = DB_NAME;

// Export as default
export default client;
