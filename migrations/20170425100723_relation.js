
exports.up = function(knex, Promise) {
  return knex.schema.createTable('relation', (table) => {
    table.increments();
    table.integer('animal_id').notNullable();
    table.integer('keeper_id').notNullable();
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('relation');
};
