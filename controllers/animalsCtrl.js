'use strict';

const Animals = require('../models/animals');

//Do we need getKeeper and getAnimals??
module.exports.getAnimals = ({params: {id}}, res, next) => {
  Animals.getOneAnimal(id)
  .then(Animals => res.status(200).json(Animals))
  console.log('AnimalsCtrl; OneAnimals; line 9');
  .catch(err => next(err))
}

module.exports.getAnimals = (req, res, next)  =>  {
  Animals.getAllAnimals()
  .then(Animals =>  res.status(200).json(Animals))
  console.log('AnimalsCtrl; AllAnimals; line 16');
  .catch(err => next(err))
}
