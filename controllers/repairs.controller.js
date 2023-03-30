const Repair = require('../models/repairs.model');
const User = require('../models/users.model');

exports.findAllRepairs = async (req, res) => {
    // const { requestTime } = req;
    try {
        const repairs = await Repair.findAll({
            where: {
                status: 'pending',
            },
        });
        res.status(200).json({
            message: 'The query has realized',
            // requestTime,
            results: repairs.length,
            repairs,
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

exports.createRepairs = async (req, res) => {
    try {
        const { date, userId } = req.body;

        const repair = await Repair.create({
            date,
            userId,
        });

        res.status(201).json({
            status: 'success',
            message: 'The repair has been created succesfully!',
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
exports.updateRepairs = async (req, res) => {
    try {
        const { repair } = req;
        const { status } = req.body;
        await repair.update({ status: 'completed' });
        res.status(200).json({
            status: 'success',
            message: 'The repair was updated!',
            repair,
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
exports.deleteRepairs = async (req, res) => {
    try {
        const { repair } = req;
        await repair.update({ status: 'cancelled' });
        res.status(200).json({
            status: 'success',
            message: 'The repair has been deleted',
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
exports.findOneRepair = async (req, res) => {
    try {
        const { repair } = req;
        res.status(200).json({
            status: 'success',
            message: 'Repair Found!',
            repair,
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
