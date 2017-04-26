'use strict'

const  { Router } = require('express');
const router = Router();

const { getAnimals, getAnimal  } = require('../controllers/animalsCtrl')


router.get('/animals', getAnimals);
// router.post('/animals/new', METHOD TO POST NEW ANIMAL);
// router.get('/keepers', METHOD TO GET ALL KEEPERS);
// router.post('/keepers/new', METHOD TO POST A NEW KEEPER);
// router.get('animals/:id', METHOD TO GET ALL ANIMALS FOR A KEEPER);
// router.get('keepers/:id', METHOD TO GET ALL KEEPERS FOR A ANIMAL);
// router.delete('keepers/:id', METHOD TO DELETE A KEEPER BY ID)
// router.delete('/animals/:id', METHOD TO DELETE AN ANIMAL);
// router.patch('/animals/:new', METHOD TO PATCH ANIMAL INFO);
// router.patch('/keepers/:new', METHOD TO PATCH KEEPERS INFO);



module.exports = router;
