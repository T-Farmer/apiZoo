'use strict'

const { Router } = require('express');
const router = Router();

router.use(require('./routes'))

<<<<<<< HEAD
router.get('/', function(req, res)) {
  // res.json({
  //   'title':  'Zoo API data',
  // })
}
=======
router.get('/', (req, res) => {
  res.json({
 'animals': './animals',
 'keepers': './keepers'
})

});
>>>>>>> dfe3edb4d5b3cb25a23067f228659531b30d7b95

module.exports = router;
