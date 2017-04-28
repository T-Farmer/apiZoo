//seeding for animals

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
        species: 'Talkleus Farmersua',
        age: 12
      }),
      knex('animals').insert({
        name: 'Robert',
        species: 'Robert Robert',
        age: 120
      }),
      knex('animals').insert({
        name: 'Tambo',
        species: 'Smileitus Charmunia',
        age: 56
      }),
      knex('animals').insert({
        name: 'Ashley',
        species: 'Lunchitan Readerous',
        age: 11
      }),
      knex('animals').insert({
        name: 'Joel',
        species: 'Anticus Crus',
        age: 20
      }),
      knex('animals').insert({
        name: 'West',
        species: 'Pingpongus Melrosi',
        age: 90
      }),
      knex('animals').insert({
        name: 'Schuyler',
        species: 'Forcius Withus',
        age: 17
      }),
      knex('animals').insert({
        name: 'Woodard',
        species: 'Treeleos Lukeius',
        age: 8
      }),
      knex('animals').insert({
        name: 'Jesse',
        species: 'Kirbyi Waddelli',
        age: 4
      }),
      knex('animals').insert({
        name: 'Charlie',
        species: 'Predatoris Fanita',
        age: 89
      }),
      knex('animals').insert({
        name: 'Ben',
        species: 'Cringleo Chrisitia',
        age: 234
      }),
      knex('animals').insert({
        name: 'Westley',
        species: 'Rassberritus Scorekeeperluo',
        age: 2
      }),
      knex('animals').insert({
        name: 'Sorrel',
        species: 'Purchaxi Localniam',
        age: 15
      }),
      knex('animals').insert({
        name: 'Jared',
        species: 'Cardinaltum Fanita',
        age: 12
      }),
      knex('animals').insert({
        name: 'Lucas',
        species: 'Ayequenius Highitus',
        age: 16
      }),
      knex('animals').insert({
        name: 'Priya',
        species: 'Krishnapriya Sivasubramanian',
        age: 9
      }),
      knex('animals').insert({
        name: 'Jufe',
        species: 'Septuaginta Quinct',
        age: 75
      })
    ]);
  });
};
