'use strict';

const {bookshelf} = require('../db/database');
require('./animals_keepers');
require('./animals');

const Keepers = bookshelf.Model.extend({
  tableName:  'keepers'
}, {
  getAllKeepers:  function() {
    console.log('Get all keepers from model');
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    console.log('Keepers model; AllKeepers function; line 15')
    .catch((err) => { return err})
  },
  getOneKeeper: function(id){
    return this.forge({id})
    .fetch()
    .then(show => show)
    console.log('Keepers model; OneKeeper function; line 22')
    .catch((err) => { return err})
  },
  deleteKeeper: function(id) {
    return this.forge({id})
    .destroy()
    .then( () => {
      return {'msg': 'Keeper removed.'}
    })
    console.log('Keepers model; Delete keeper function; line 32')
    .catch( (err) => {
      console.log("delete keeper error", err)
      return err
    })

},
editThisKeeper: function(id, { name }) {
  return this.forge({ id, name})
  .save()
  .then( () => {
    return { 'msg': 'Keeper updated'}
  })
  .catch ( (err) => {
    console.log('err from edit keeper', err)
    return  err
  })
}
});

module.exports = bookshelf.model('Keepers', Keepers)
