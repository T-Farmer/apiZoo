'use strict'

const  { Router } = require('express');
const router = Router();

const { getAnimals, getAnimal, postNewAnimal, deleteAnimal, animalEdit  } = require('../controllers/animalsCtrl')
const { getKeeper, getKeepers, keeperEdit, deleteKeeper, postNewKeeper } = require('../controllers/keepersCtrl')
const { getAnimalsForKeeper, getKeepersForAnimal, joinDeleteAnimal, joinDeleteKeeper } = require('../controllers/animals_keepersCtrl')


router.get('/animals', getAnimals);
router.post('/animals/new', postNewAnimal);
router.get('/keepers', getKeepers);
router.post('/keepers/new', postNewKeeper );
router.get('animals/keeper/:id', getAnimalsForKeeper);
router.get('keepers/animal/:id', getKeepersForAnimal);
router.delete('keepers/:id', deleteKeeper)
router.delete('keepers/animals/:id', joinDeleteAnimal)
router.delete('animals/keepers/:id', joinDeleteKeeper)
router.delete('/animals/:id', deleteAnimal);
router.patch('/animals/:new', animalEdit);
// router.patch('/keepers/:new', keeperEdit);



module.exports = router;
