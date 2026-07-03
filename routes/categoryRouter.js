const {Router} = require('express');

const router = Router();

const categoryController = require('../controllers/categoryController');

//routes
router.get('/new', categoryController.newCategoryGet);
// router.post('/new', categoryController.newCategoryPost);

router.get('/:id', categoryController.getCategoryDetails);



module.exports = router;