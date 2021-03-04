const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.expense.index);
router.get('/:id', ctrl.expense.show);
router.post('/', ctrl.expense.create);
router.put('/:id', ctrl.expense.update);
router.delete('/:id', ctrl.expense.destroy);


// exports
module.exports = router;
