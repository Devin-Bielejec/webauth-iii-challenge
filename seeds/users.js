
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {id: 1, username: "Devin", password: "isCool", department: "Awesome"},
        {id: 2, username: "Seth", password: "isCool", department: "Awesome"},
        {id: 3, username: "David", password: "isCool", department: "Awesome"}
      ]);
    });
};
