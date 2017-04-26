'use strict'

const  { Router } = require('express');
const router = Router();

const { getAnimals, getAnimal, postNewAnimal, deleteAnimal, animalEdit  } = require('../controllers/animalsCtrl')
const { getKeeper, getKeepers, keeperEdit, deleteKeeper, postNewKeeper } = require('../controllers/keepersCtrl')


router.get('/animals', getAnimals);
router.post('/animals/new', postNewAnimal);
router.get('/keepers', getKeepers);
router.post('/keepers/new', postNewKeeper );
// router.get('animals/:id', METHOD TO GET ALL ANIMALS FOR A KEEPER);
// router.get('keepers/:id', METHOD TO GET ALL KEEPERS FOR A ANIMAL);
router.delete('keepers/:id', deleteKeeper)
router.delete('/animals/:id', deleteAnimal);
router.patch('/animals/:new', animalEdit);
router.patch('/keepers/:new', keeperEdit);



module.exports = router;
