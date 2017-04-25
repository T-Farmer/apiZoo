'use strict';

const Animals = require('../models/animals');

//Do we need getKeeper and getAnimals??
module.exports.getAnimal = ({params: {id}}, res, next) => {
<<<<<<< HEAD
  Animals.getOneKeeper(id)
=======
  Animals.getOneAnimal(id)
>>>>>>> c8c5078fb445b3c8d5efeaf872ecd82b41d7c598
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
