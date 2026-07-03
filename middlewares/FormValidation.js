const {body} = require('express-validator');

const Category_FormValidation = [
    body('name').notEmpty().trim().isAlpha().withMessage(`First name should contain only letters`),
    body('description').notEmpty().trim() .isLength({max:200}).withMessage("description can't exceed 200 characters")

]

module.exports = {
    Category_FormValidation
}