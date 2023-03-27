const Repair = require('../models/repairs.model');

exports.validRepairs = (req, res, next) => {
    const { date, userId } = req.body;
    if (!date) {
        return res.status(400).json({
            status: 'error',
            message: 'the date is required',
        });
    } else if (!userId) {
        return res.status(400).json({
            status: 'error',
            message: 'the userId is required',
        });
    }

    next();
};
exports.validExistRepairs = async (req, res, next) => {
    const { id } = req.params;
    const repair = await Repair.findOne({
        where: {
            id,
            status: 'pending',
        },
    });
    if (!repair) {
        return res.status(404).json({
            status: 'error',
            message: `Repair with id ${id} not found!`,
        });
    }
    req.repair = repair;
    next();
};
