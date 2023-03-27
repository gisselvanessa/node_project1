const Repair = require('../models/repairs.model');
const User = require('../models/users.model');

exports.findAllRepairs = async (req, res) => {
    // const { requestTime } = req;
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
};

exports.createRepairs = async (req, res) => {
    console.log(req.body);
    const { date, userId } = req.body;
    const repair = await Repair.create({
        date,
        userId,
    });

    res.status(201).json({
        status: 'success',
        message: 'The repair has been created successfully',
        repair,
    });
};
exports.updateRepairs = async (req, res) => {
    const { repair } = req;
    const { status } = req.body;
    await repair.update({ status: 'completed' });
    res.status(200).json({
        status: 'success',
        message: 'The repair was updated!',
        repair,
    });
};
exports.deleteRepairs = async (req, res) => {
    const { repair } = req;
    await repair.update({ status: 'cancelled' });
    res.status(200).json({
        status: 'success',
        message: 'The repair has been deleted',
    });
};
exports.findOneRepair = async (req, res) => {
    const { repair } = req;
    res.status(200).json({
        status: 'success',
        message: 'Repair Found!',
        repair,
    });
};
