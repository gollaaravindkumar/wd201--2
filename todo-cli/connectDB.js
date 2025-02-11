const Sequelize = require("sequelize");

//const database = "todo_db";
//const username = "postgres";
//const password = "postgres";
const sequelize = new Sequelize('todo_db', 'postgres', 'postgres', {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const connect = async () => {
  return sequelize.authenticate();
}

module.exports = {
  connect,
  sequelize
}