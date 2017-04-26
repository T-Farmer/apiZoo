'use strict'

const  { Router } = require('express');
const router = Router();

const { getAnimals, getAnimal, postNewAnimal, deleteAnimal, animalEdit  } = require('../controllers/animalsCtrl')
const { getKeeper, getKeepers  } = require('../controllers/keepersCtrl')


router.get('/animals', getAnimals);
router.post('/animals/new', postNewAnimal);
router.get('/keepers', getKeepers);
// router.post('/keepers/new', METHOD TO POST A NEW KEEPER);
// router.get('animals/:id', METHOD TO GET ALL ANIMALS FOR A KEEPER);
// router.get('keepers/:id', METHOD TO GET ALL KEEPERS FOR A ANIMAL);
// router.delete('keepers/:id', METHOD TO DELETE A KEEPER BY ID)
router.delete('/animals/:id', deleteAnimal);
router.patch('/animals/:new', animalEdit);
// router.patch('/keepers/:new', METHOD TO PATCH KEEPERS INFO);
//


module.exports = router;
