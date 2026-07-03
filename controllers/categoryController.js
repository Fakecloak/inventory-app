//import queries from models
const categoryQuery = require('../models/categoryQueries');
const itemQuery = require('../models/itemQueries');

// to get all categories and render on index page
async function getCategories(req, res) {
    const categories = await categoryQuery.getAllCategories();

    res.render('index', {title: 'All Categories', categories})
}

// to get  details of a specific category and render on details page
async function getCategoryDetails(req,res) {
    const categoryID = req.params.id;

    const category = await categoryQuery.getCategoryById(categoryID);
    if(!category){
        return res.status(404).send('Category not found');
    }

    const items = await itemQuery.getItemsByCategoryId(categoryID);

    res.render('categories/details', {title: category.name, category, items})
}

module.exports = {
    getCategories,
    getCategoryDetails,
}