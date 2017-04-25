
exports.up = function(knex, Promise) {
  return  knex.schema.createTable('animals', (table) => {
    table.increments();
    table.string('animal_name').notNullable();
    table.string('animal_species').notNullable();
    table.integer('animal_age').notNullable();
    // table.integer('keeper_id').unsigned().references('id');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('animals');
};
