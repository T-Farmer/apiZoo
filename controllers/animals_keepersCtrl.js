'use strict'

const AKeepers = require('../models/animals_keepers');

module.exports.getKeepersForAnimal = ( {params: { id } }, res, next) => {
  AKeepers.getKeepersforAnimal(id)
  .then( (keepArr) => {
    res.status(200).json(keepArr)
    .catch((err) => {
      console.log('getkeeper for animal ctroller', err)
      return next(err)
    })
  })
}

module.exports.getAnimalsForKeeper = ( { params: { id } }, res, next ) => {
  AKeepers.getAnimalsforKeeper(id)
  .then( (animalArr) => {
    res.status(200).json(animalArr)
    .catch( (err) => {
      console.log("getAnimals for keeper controller", err)
      return next(err)
    })
  })
}

module.exports.joinDeleteKeeper = ( { params: { id} }, res, next ) => {
  AKeepers.deleteKeeper(id)
  .then( (res) => {
    res.status(200).json({msg: 'keeper deleted from join table'})
  })
  .catch( (err) => {
    console.log("err in joinDeleteKeeper")
    return next(err)
  })
}

module.exports.joinDeleteAnimal = ( { params: { id} }, res, next ) => {
  AKeepers.deleteAnimal(id)
  .then( (res) => {
    res.status(200).json({msg: 'animal deleted from join table'})
  })
  .catch( (err) => {
    console.log("err in joindeleteAnimal")
    return next(err)
  })
}
