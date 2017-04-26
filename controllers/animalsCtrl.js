'use strict';

const Animals = require('../models/animals');
const Animal_Keepers = require('../models/animals_keepers')

module.exports.getAnimal = ({params: {id}}, res, next) => {
  Animals.getOneAnimal(id)
  .then(animal => res.status(200).json(animal))
  .catch((err) => {return next(err)})
}

module.exports.getAnimals = (req, res, next)  =>  {
  console.log("get animals called")
  Animals.getAllAnimals()
  .then(animals =>  res.status(200).json(animals))
  .catch((err)  => { return next(err)})
}

module.exports.postNewAnimal = ({ body }, res, next)  =>  {
  Animals.forge(body)
  .save()
  .then(animal =>  res.status(201).json({msg: 'You posted an animal!'}))
  .catch((err)  => { return next(err)})
}

module.exports.deleteAnimal = ( { params: { id }}, res, next) => {
  Animals.forge({id})
  .destroy()
  .then( (animal) => {
      Animal_Keepers.deleteAnimal(id)
    res.status(200).json(animal)
  })
  .catch( (err) => {
    console.log('deleteshow err', err)
    return next(err)
  })
}

module.exports.animalEdit = ( req, res, next) => {
  const animal =  req.body
  const id = req.params.id
  console.log("anmial", animal)
  console.log("id", id)
  Animals.editThisAnimal(id, animal)
  .then( (res) => {
    res.status(200).json(animal)
    .catch( (err) => {
      console.log("edit error", err)
      return next(err)
    })
  })
}
