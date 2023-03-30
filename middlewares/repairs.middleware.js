const Repair = require('../models/repairs.model');

exports.validExistRepairs = async (req, res, next) => {
    try {
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
                message: 'Repair not found',
            });
        }

        req.repair = repair;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });
    }
};
