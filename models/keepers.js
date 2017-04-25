'use strict';

const {bookshelf} = require('../db/database');
require('./animals_keepers');
require('./animals');

const Keepers = bookshelf.Model.extend({
  tableName:  'Zookeepers'
}, {
  getAllKeepers:  function() {
    console.log('Get all keepers from model');
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    console.log('Keepers model; AllKeepers function; line 16');
    .catch(err => err)
  },
  getOneKeeper: function(id){
    return this.forge({id})
    .fetch()
    .then(show => show)
    console.log('Keepers model; OneKeeper function; line 23');
    .catch(err => err)
  }
})

module.exports = bookshelf.model('Keepers', Keepers)
