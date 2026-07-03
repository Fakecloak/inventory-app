const {matchedData, validationResult } = require("express-validator");

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

//get form view
async function newCategoryGet(req,res){
    res.render('categories/form', {title: 'Create Category'})

}

//post form view
async function newCategoryPost (req,res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.render('categories/form',{
            title: 'Create Category',
            errors: errors.array(),
        })
    }
    const {name, description} = matchedData(req);

    const category = await categoryQuery.createCategory(name,description);

    res.redirect(`/categories/${category.id}`);
}

async function deleteCategoryPost (req,res) {
    const categoryID = req.params.id;
    
    if(!categoryID){
        return res.status(404).send('Category not found');
    }

    await categoryQuery.deleteCategory(categoryID);
    res.redirect('/')
}


module.exports = {
    getCategories,
    getCategoryDetails,
    newCategoryGet,
    newCategoryPost,
    deleteCategoryPost,
}