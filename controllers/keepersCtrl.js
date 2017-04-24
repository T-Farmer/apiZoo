'use strict';

const {bookshelf} = require('../db/database');


module.exports.getAnimals = (req, res, next) => {
  Animals.getAll()
  .then( (animals) => {
    res.status(200).json(animals);
  })
  .catch( (error) => {
    next(error);
  });
};
