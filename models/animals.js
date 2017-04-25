'use strict';

const {bookshelf} = require('../db/database');
require('./animals_keepers');
require('./keepers');

const Animal = bookshelf.Model.extend({
  tableName:  'animals'
}, {
  getAllAnimals:  function() {
    console.log('Get all keepers from model');
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch((err) => {return err } )
  },
  getOneAnimal: function(id){
    return this.forge({id})
    .fetch()
    .then(show => show).catch((err) => {return err } )
  },
  deleteAnimal: function(id) {
    return this.forge({id})
    .destroy()
    .then( () => {
      return {'msg': 'Animal removed.'}
  }).catch( (err) => {
      console.log('Animals model delete keeper error', err)
      return err
  })

}
});

module.exports = bookshelf.model('Animal', Animal)
