// Credentials for jwt Secret and Database
// module.exports = {
//     MONGO_URI: process.env.MONGODB_URI || process.env.DATABASE_INFO,
//     jwtSecret: process.env.JWT_SECRET
// }

require("dotenv").config();
// file to config MySQL database using Sequelize. we are using a .env file to pass the credentials.
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: 0,
    jwtSecret: process.env.JWT_SECRET
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: 0,
    jwtSecret: process.env.JWT_SECRET
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
    jwtSecret: process.env.JWT_SECRET
  },
};