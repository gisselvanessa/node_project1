const User = require('../models/users.model');

exports.findAllUsers = async (req, res) => {
    // const { requestTime } = req;
    const users = await User.findAll({
        where: {
            status: 'available',
        },
    });
    res.status(200).json({
        message: 'The query has realized!',
        // requestTime,
        results: users.length,
        users,
    });
};

exports.createUsers = async (req, res) => {
    console.log(req.body);
    const { name, email, password, role } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        role,
    });
    res.status(201).json({
        status: 'success',
        message: 'The user has been created successfully',
        user,
    });
};
exports.updateUsers = async (req, res) => {
    const { user } = req;
    const { name, email } = req.body;
    await user.update({ name, email });
    res.status(200).json({
        status: 'success',
        message: 'The user was updated!',
        user,
    });
};
exports.deleteUsers = async (req, res) => {
    const { user } = req;
    await user.update({ status: 'disable' });
    res.status(200).json({
        status: 'success',
        message: 'The user has been deleted',
    });
};
exports.findOneUser = async (req, res) => {
    const { user } = req;
    res.status(200).json({
        status: 'success',
        message: 'User found!',
        user,
    });
};
