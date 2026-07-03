const {Router} = require('express');

const router = Router();

const categoryController = require('../controllers/categoryController');
const itemController = require('../controllers/itemController');


//routes
router.get('/', categoryController.getCategories);
router.get('/categories/:id', categoryController.getCategoryDetails);
router.get('/items/:id', itemController.getItemDetails);


module.exports = router;