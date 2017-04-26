'use strict';

const Keepers = require('../models/keepers');
const Animal_Keepers = require('../models/animals_keepers')

//Do we need getKeeper and getKeepers??
module.exports.getKeeper = ({params: {id}}, res, next) => {
  Keepers.getOneKeeper(id)
  .then(Keepers => res.status(200).json(Keepers))
  .catch(err => next(err))
}

module.exports.getKeepers = (req, res, next)  =>  {
  Keepers.getAllKeepers()
  .then(Keepers =>  res.status(200).json(Keepers))
  .catch(err => next(err))
}

module.exports.postNewKeeper = ({ body }, res, next) => {
  Keepers.forge(body)
  .then(Keepers => res.status(201).json({msg: 'You posted a keeper'}))
  .catch((err) => { return next(err)})
}

module.exports.deleteKeeper = ({ params: { id }}, res, next) => {
  Keepers.forge({id})
  .destroy()
  .then( (keepers) => {
    Animal_Keepers.deleteKeeper(id)
    res.status(200).json(animal)
  })
  .catch( (err) => {
    console.log('error in deleting keeper', err)
  })
}

module.exports.keeperEdit = (req, res, next) => {
  const keeper = req.body
  const id = req.params.id
  console.log("keeper", keeper)
  console.log("id", id)
  Keepers.editThisKeeper(id, keeper)
  .then(res => {
    res.status(200).json(keeper)
    .catch( (err) => {
      console.log("edit error", err)
      return next(err)
    })
  })
}
