'use strict';

const {bookshelf} = require('../db/database');
require('./animals_keepers');
require('./animals');

const Keepers = bookshelf.Model.extend({
  tableName:  'Zookeepers'
  upvotes:  function(){return this.hasMany()},
  animals:  function(){return
  this.belongsToMany('Animals').
  }
})
