const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            errors: errors.mapped(),
        });
    }

    next();
};

exports.createRepairValidation = [
    body('date').notEmpty().withMessage('Date cannot be empty'),
    body('motorsNumber')
        .notEmpty()
        .withMessage('motorsNumber cannot be empty')
        .isNumeric()
        .withMessage('Must be a number'),

    body('description').notEmpty().withMessage('Description cannot be empty'),
    validFields,
];

exports.updateRepairValidation = [
    body('date').notEmpty().withMessage('Date cannot be empty'),
    body('motorsNumber')
        .notEmpty()
        .withMessage('motorsNumber cannot be empty')
        .isNumeric()
        .withMessage('Must be a number'),
    body('description').notEmpty().withMessage('Description cannot be empty'),
    validFields,
];
