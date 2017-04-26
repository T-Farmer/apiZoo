'use strict';

const {bookshelf} = require('../db/database');
require('./animals_keepers');
require('./keepers');

const Animals = bookshelf.Model.extend({
  tableName:  'animals'
}, {
  getAllAnimals:  function() {
    console.log('Get all animals from model');
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

},
editThisAnimal: function(id, {name, species, age}) {
  return this.forge({ id, name, species, age })
  .save()
  .then( () => {
    return { 'msg': 'Animal updated'}
  })
  .catch ( (err) => {
    console.log('err from edit animal', err)
    return  err
  })
}
});

module.exports = bookshelf.model('Animals', Animals)
