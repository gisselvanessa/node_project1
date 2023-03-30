const express = require('express');

const usersController = require('./../controllers/users.controller');
const usersMiddleware = require('./../middlewares/users.middleware');
const usersValidationMiddleware = require('./../middlewares/users.validations.middleware');
const router = express.Router();

router.route('/').get(usersController.findAllUsers).post(
    // usersMiddleware.validUsers,
    usersValidationMiddleware.createUserValidation,
    usersController.createUsers
);

router
    .route('/:id')
    .get(usersMiddleware.validExistUsers, usersController.findOneUser)
    .patch(
        // usersMiddleware.validUsers,
        usersMiddleware.validExistUsers,
        usersValidationMiddleware.updateUserValidation,
        usersController.updateUsers
    )
    .delete(usersMiddleware.validExistUsers, usersController.deleteUsers);

module.exports = router;
