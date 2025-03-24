const { check , validationResult } = require('express-validator');

const validatorMiddleware = require("../../middlewares/ValidatorMiddleware");

exports.GetCategoryValidator = [

    check('id').isMongoId().withMessage("Invalid category id"),
    validatorMiddleware

];


exports.CreateCategoryValidator = [
    check("name").notEmpty().withMessage("Category required")
                .isLength({ min: 4}).withMessage("Too short category name")
                .isLength({max:50}).withMessage("Too long category name"),
    validatorMiddleware
]

exports.UpdateCategoryValidator = [
    check("name").notEmpty().withMessage("Category required")
                .isLength({ min: 4}).withMessage("Too short category name")
                .isLength({max:50}).withMessage("Too long category name"),
    check('id').isMongoId().withMessage("Invalid category id"),
    validatorMiddleware
]


exports.DestroyCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid category id"),
    validatorMiddleware
];
