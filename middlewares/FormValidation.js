const {body} = require('express-validator');

const Category_FormValidation = [
    body('name').notEmpty().trim().isAlpha().withMessage(`First name should contain only letters`),
    body('description').notEmpty().trim() .isLength({max:200}).withMessage("description can't exceed 200 characters")

]

const Item_FormValidation = [
    body('name').notEmpty().trim().isAlpha().withMessage(`First name should contain only letters`),
    body('description').notEmpty().trim().isLength({max:200}).withMessage("description can't exceed 200 characters"),
    body('manufacturer').notEmpty().trim().isAlpha().withMessage(`manufacturer should contain only letters`),
    body('price').notEmpty().trim().isInt().withMessage('price must be in number'),
    body('stock_quantity').notEmpty().trim().isInt().withMessage('price must be in number'),
    body('category_id').notEmpty().trim().isInt(),
]
module.exports = {
    Category_FormValidation,
    Item_FormValidation,
}