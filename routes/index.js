'use strict'

const { Router } =require('express');
const router = Router();

router.use(require('./routes'))

router.get('/', function(req, res)) {
}

module.exports = router;
