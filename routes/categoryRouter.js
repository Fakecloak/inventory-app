const {Router} = require('express');

const router = Router();

const categoryController = require('../controllers/categoryController');

//middlwares
const  { Category_FormValidation } = require('../middlewares/FormValidation')

//routes
router.get('/new', categoryController.newCategoryGet);
router.post('/new', Category_FormValidation,categoryController.newCategoryPost);

router.get('/:id', categoryController.getCategoryDetails);

router.post('/:id/delete', categoryController.deleteCategoryPost);

module.exports = router;