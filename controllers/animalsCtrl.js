'use strict';

const Animals = require('../models/animals');

module.exports.getAnimal = ({params: {id}}, res, next) => {
  Animals.getOneAnimal(id)
  .then(Animals => res.status(200).json(Animals))
  .catch((err) => {return next(err)})
}

module.exports.getAnimals = (req, res, next)  =>  {
  Animals.getAllAnimals()
  .then(Animals =>  res.status(200).json(Animals))
  .catch((err)  => { return next(err)})
}
