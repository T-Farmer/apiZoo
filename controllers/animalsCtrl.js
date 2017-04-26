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

module.exports.postNewAnimal = ({ body }, res, next)  =>  {
  Animals.forge(body)
  .then(Animals =>  res.status(201).json({msg: 'You posted an animal!'}))
  .catch((err)  => { return next(err)})
}

module.exports.deleteAnimal = ({ params: { id }}, res, next) => {
  Animals.forge({id})
  .destroy()
  .then( (animal) => {
    res.status(200).json(animal)
  })
  .catch( (err) => {
    console.log('deleteshow err', err)
  })
}
