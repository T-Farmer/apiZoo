
exports.seed = function(knex, Promise) {
  return knex('animals').del()
  .then(function () {
    return Promise.all([
      knex('animals').insert({
        name: 'Billy',
        species: 'Bringcius Donutis',
        age: 3
      }),
      knex('animals').insert({
        name: 'Terrill',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Robert',
        species: 'Robert Robert',
        age:
      }),
      knex('animals').insert({
        name: 'Tambo',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Ashley',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Joel',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'West',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Schuyler',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Woodard',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Jesse',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Charlie',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Ben',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Westley',
        species: '',
        age:
      }),
      knex('animals').insert({
        name: 'Sorrel',
        species: '',
        age:
      }),
      knex('animals').insert({
        name:
        species:
        age:
      }),
      knex('animals').insert({
        name:
        species:
        age:
      }),
      knex('animals').insert({
        name:
        species:
        age:
      }),
      knex('animals').insert({
        name:
        species:
        age:
      }),
      knex('animals').insert({
        name:
        species:
        age:
      }),
      knex('animals').insert({
        name:
        species:
        age:
      })
    ]);
  });
};
