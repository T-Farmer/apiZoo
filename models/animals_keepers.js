'use strict';

const { bookshelf } = require('../db/database');
require('./keepers');
require('./animals');

const Animals_Keepers = bookshelf.Model.extend({
  tableName:  'animals_keepers'
}, {
  getAnimalsForKeeper: function(id) {
    const keeperId = id
    return this.forge(keeperId)
    .where('keepers_id', '=', keeperId)
    .fetchAll()
    .then( (id) => {
      return id
    })
    .catch( (err) => {
      console.log('getAnimalsforKeepers', err)
      return err
    })
  },
  getKeepersForAnimal: function (id) {
      const animalId = id
    return this.forge(animalId)
    .where('animals_id', '=', animalId)
    .fetchAll()
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

module.exports= bookshelf.model('Animals_Keepers', Animals_Keepers)
