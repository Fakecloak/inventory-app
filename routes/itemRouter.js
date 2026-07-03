const {Router} = require('express');

const router = Router();

const itemController = require('../controllers/itemController');


//routes
router.get('/:id', itemController.getItemDetails);


module.exports = router;