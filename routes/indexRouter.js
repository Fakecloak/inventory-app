const {Router} = require('express');

const router = Router();

const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getCategories);
router.get('/categories/:id', categoryController.getCategoryDetails);


module.exports = router;