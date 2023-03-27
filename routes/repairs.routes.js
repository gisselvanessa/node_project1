const express = require('express');

const repairsController = require('./../controllers/repairs.controller');
const repairsMiddleware = require('./../middlewares/repairs.middleware');
const router = express.Router();

router
  .route('/')
  .get(repairsController.findAllRepairs)
  .post(repairsMiddleware.validRepairs, repairsController.createRepairs);

router
  .route('/:id')
  .get(repairsMiddleware.validExistRepairs, repairsController.findOneRepair)
  .patch(
    repairsMiddleware.validRepairs,
    repairsMiddleware.validExistRepairs,
    repairsController.updateRepairs
  )
  .delete(repairsMiddleware.validExistRepairs, repairsController.deleteRepairs);

module.exports = router;
