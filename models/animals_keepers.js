'use strict';

const { bookshelf } = require('../db/database');
require('./keepers');
require('./animals');

const Animal_Keepers = bookshelf.Model.extend({
  tableName:  'animals_keepers'
}, {
  getAnimalsforKeeper: function(id) {
    const keeperId = id
    return this.forge(keeperId)
    .fetchAll()
    .where('keepers_id', '=', keeperId)
    .then( (id) => {
      return id
    })
    .catch( (err) => {
      console.log('getAnimalsforKeepers', err)
      return err
    })
  },
  getKeepersforAnimal: function (id) {
      const animalId = id
    return this.forge(animalId)
    .fetchAll()
    .where('animals_id', '=', animalId)
    .then( (id) => {
      return id
    })
    .catch( (err) => {
      console.log('get Keepers for animal', err)
      return err
    })
  },
  deleteKeeper: function (id) {
    const keeperId = id
    return this.forge(keeperId)
    .where('keepers_id', '=', keeperId)
    .destroy()
    .then( (res) => {
      return res
    })
    .catch( (err) => {
      console.log("delete Keeper in animals_keeper err", err)
      return err
    })

  },
  deleteAnimal: function (id) {
      const animalId = id
    return this.forge(animalId)
    .where('keepers_id', '=', animalId)
    .destroy()
    .then( (res) => {
      return res
    })
    .catch( (err) => {
      console.log("delete animal in animals_keeper err", err)
      return err
    })

  }
});

module.exports= bookshelf.model('Animal_Keepers', Animal_Keepers)
