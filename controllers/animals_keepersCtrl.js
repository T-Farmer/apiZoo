'use strict'


require('../models/animals_keepers');

module.exports.getKeepersForAnimal = ( {params: { id } }, res, next) => {
  Animals_Keepers.getKeepersforAnimal(id)
  .then( (keepArr) => {
    res.status(200).json(keepArr)
    .catch((err) => {
      console.log('getkeeper for animal ctroller', err)
      return next(err)
    })
  })
}

<<<<<<< HEAD
module.exports.getAnimalsForKeeper = ( { params: { id } }, res, next ) => {
  AKeepers.getAnimalsforKeeper(id)
=======
module.exports.getAnimalsforKeeper = ( { params: { id } }, res, next ) => {
  Animals_Keepers.getAnimalsforKeeper(id)
>>>>>>> edaf22250d80acb9cd5808ecbb51e40449b57c51
  .then( (animalArr) => {
    res.status(200).json(animalArr)
    .catch( (err) => {
      console.log("getAnimals for keeper controller", err)
      return next(err)
    })
  })
}

module.exports.joinDeleteKeeper = ( { params: { id} }, res, next ) => {
  Animals_Keepers.deleteKeeper(id)
  .then( (res) => {
<<<<<<< HEAD
    res.status(200).json({msg: 'keeper deleted from join table'})
=======
    res.status(200).json({'msg': 'keeper deleted from join table'})
>>>>>>> edaf22250d80acb9cd5808ecbb51e40449b57c51
  })
  .catch( (err) => {
    console.log("err in joinDeleteKeeper")
    return next(err)
  })
}

module.exports.joinDeleteAnimal = ( { params: { id} }, res, next ) => {
  Animals_Keepers.deleteAnimal(id)
  .then( (res) => {
<<<<<<< HEAD
    res.status(200).json({msg: 'animal deleted from join table'})
=======
    res.status(200).json({'msg': 'animal deleted from join table'})
>>>>>>> edaf22250d80acb9cd5808ecbb51e40449b57c51
  })
  .catch( (err) => {
    console.log("err in joindeleteAnimal")
    return next(err)
  })
}
