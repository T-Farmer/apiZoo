'use strict';

const Keepers = require('../models/keepers');

//Do we need getKeeper and getKeepers??
module.exports.getKeepers = ({params: {id}}, res, next) => {
  Keepers.getOneKeeper(id)
  .then(Keepers => res.status(200).json(Keepers))
  console.log('KeepersCtrl; OneKeeper; line 9');
  .catch(err => next(err))
}

module.exports.getKeepers = (req, res, next)  =>  {
  Keepers.getAllKeepers()
  .then(Keepers =>  res.status(200).json(Keepers))
  console.log('KeepersCtrl; AllKeepers; line 16');
  .catch(err => next(err))
}
