'use strict';

const {bookshelf} = require('../db/database');
require('./animals_keepers');
require('./animals');

const Keepers = bookshelf.Model.extend({
  tableName:  'Zookeepers'
  animals: function(){return this.belongsTo('Animals')},
}, {
  getAllKeepers:  function() {
    console.log('Get all keepers from model');
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(err => err)
  },
  getOneKeeper: function(id){
    return this.forge({id})
    .fetch()
    .then(show => show)
    .catch(err => err)
  }
})

module.exports = bookshelf.model('Keepers', Keepers)
