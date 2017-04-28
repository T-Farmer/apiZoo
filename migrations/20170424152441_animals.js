
exports.up = function(knex, Promise) {
  return  knex.schema.createTable('animals', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('species').notNullable();
    table.integer('age').notNullable();

  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('animals');
};
