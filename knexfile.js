const db = require("knex")({
  client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
})

const findAll = () => {
  return db("users");
}

const insert = (user) => {
  return db("users")
  .insert(user);
}

const findByUserName = (username) => {
  console.log(username);
  return db("users")
  .where(username);
}

module.exports = {
  findAll,
  insert,
  findByUserName
}