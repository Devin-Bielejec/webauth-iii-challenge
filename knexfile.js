const db = require("knex")({
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
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
  return db("users")
  .where(username);
}