const express = require('express');

const repairsController = require('./../controllers/repairs.controller');
const repairsMiddleware = require('./../middlewares/repairs.middleware');
const repairsValidationMiddleware = require('./../middlewares/repairs.validations.middleware');
const router = express.Router();

router.route('/').get(repairsController.findAllRepairs).post(
    // repairsMiddleware.validRepairs,
    repairsValidationMiddleware.createRepairValidation,
    repairsController.createRepairs
);

router
    .route('/:id')
    .get(repairsMiddleware.validExistRepairs, repairsController.findOneRepair)
    .patch(
        // repairsMiddleware.validRepairs,
        repairsMiddleware.validExistRepairs,
        repairsValidationMiddleware.updateRepairValidation,
        repairsController.updateRepairs
    )
    .delete(
        repairsMiddleware.validExistRepairs,
        repairsController.deleteRepairs
    );

module.exports = router;
