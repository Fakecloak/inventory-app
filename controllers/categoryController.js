const categoryQuery = require('../models/categoryQueries');

async function getCategories(req, res) {
    const categories = await categoryQuery.getAllCategories();

    res.render('index', {title: 'All Categories', categories})
}

module.exports = {
    getCategories,
}