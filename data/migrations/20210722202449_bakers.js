exports.up = function (knex) {
  return knex.schema.createTable("bakers", (table) => {
    table.increments();
    table.string("name", 25).unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("bakers");
};
