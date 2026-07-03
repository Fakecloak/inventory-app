const {Router} = require('express');

const router = Router();

const itemController = require('../controllers/itemController');

//middlwares
const  { Item_FormValidation } = require('../middlewares/FormValidation')

//routes
router.get('/new', itemController.newItemGet);
router.post('/new', Item_FormValidation,itemController.newItemPost);

router.get('/:id', itemController.getItemDetails);

router.post('/:id/delete', itemController.deleteItemPost);

module.exports = router;