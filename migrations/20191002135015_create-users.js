
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments().notNull().unsigned()
        tbl.string("username").notNull()
        tbl.string("password").notNull()
        tbl.string("department").notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
};
