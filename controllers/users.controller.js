const User = require('../models/users.model');

exports.findAllUsers = async (req, res) => {
    // const { requestTime } = req;
    try {
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
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });
    }
};

exports.createUsers = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            role,
        });

        res.status(201).json({
            status: 'success',
            message: 'The user has been created succesfully!',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });
    }
};
exports.updateUsers = async (req, res) => {
    try {
        const { user } = req;
        const { name, email } = req.body;
        await user.update({ name, email });
        res.status(200).json({
            status: 'success',
            message: 'The user was updated!',
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });
    }
};
exports.deleteUsers = async (req, res) => {
    try {
        const { user } = req;
        await user.update({ status: 'disable' });
        res.status(200).json({
            status: 'success',
            message: 'The user has been deleted',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });
    }
};
exports.findOneUser = async (req, res) => {
    try {
        const { user } = req;
        res.status(200).json({
            status: 'success',
            message: 'User found!',
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });
    }
};
