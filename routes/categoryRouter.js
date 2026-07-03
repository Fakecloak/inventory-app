const {Router} = require('express');

const router = Router();

const categoryController = require('../controllers/categoryController');

//routes
router.get('/:id', categoryController.getCategoryDetails);


module.exports = router;