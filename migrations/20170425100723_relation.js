
exports.up = function(knex, Promise) {
  return knex.schema.createTable('relation', (table) => {
    table.increments();
    table.integer('animals_id').notNullable();
    table.integer('keepers_id').notNullable();
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('relation');
};
