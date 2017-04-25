'use strict';

const {bookshelf} = require('../db/database');
require('./animals_keepers');
require('./keepers');

const Keepers = bookshelf.Model.extend({
  tableName:  'Animals'
}, {
  getAllAnimals:  function() {
    console.log('Get all keepers from model');
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    console.log('Animals model; AllAnimals function; line 15');
    .catch(err => err)
  },
  getOneKeeper: function(id){
    return this.forge({id})
    .fetch()
    .then(show => show)
    console.log('Animals model; OneAnimal function; line 22');
    .catch(err => err)
  }
},
  deleteKeeper: function(id) {
    return this.forge({id})
    .destroy()
    .then( () => {
      return {'msg': 'Animal removed.'}
  })
    console.log('Animals model; Delete animal function; line 32');
    .catch( (err) => {
      return err
  })
})

module.exports = bookshelf.model('Animals', Animals)
