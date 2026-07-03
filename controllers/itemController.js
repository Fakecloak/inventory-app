const {matchedData, validationResult } = require("express-validator");

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

async function newItemGet(req,res) {
    const categories = await categoryQuery.getAllCategories();

    res.render('items/form', {title : 'Create New Item',categories, errors: [] })

}

async function newItemPost (req,res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        const categories = await categoryQuery.getAllCategories();

        return res.render('items/form',{
            title: 'Create New Item',
            errors: errors.array(),
            categories,

        })
    }
    const {name, description, manufacturer, price, stock_quantity, category_id } = matchedData(req);

    const newItem = await itemQuery.createItem(name, description, manufacturer, price, stock_quantity, category_id);
    //redirecting to newly  created Item display page aka details.
    res.redirect(`/items/${newItem.id}`);
}


async function deleteItemPost(req, res) {
    const itemId = req.params.id;

    if(!itemId){
        return res.status(404).send('Item not Found')
    }
    await itemQuery.deleteItem(itemId);
    res.redirect('/');

}
module.exports = {
    getItemDetails,
    deleteItemPost,
    newItemGet,
    newItemPost,
}