'use strict'

const { Router } = require('express');
const router = Router();

router.use(require('./routes'))

router.get('/', (req, res) => {
  res.json({
 'animals': './animals'
})

});

module.exports = router;
