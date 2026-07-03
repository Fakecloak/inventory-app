//import queries from models
const categoryQuery = require('../models/categoryQueries');
const itemQuery = require('../models/itemQueries');

async function getItemDetails(req, res) {
    const itemId = req.params.id;

    const item = await itemQuery.getItemById(itemId);
    if(!item){
        return res.status(404).send('cannot find item');
    }

    res.render('items/details', {title: `${item.name} Details`, item})
    
}
module.exports = {
    getItemDetails,
}