const {
    getAllSalons,
    getSalonById,
    createSalon,
    updateSalon,
    deleteSalon,
    getTopSalons,
    getSalonsByCity
} = require('../models/salonModel');


const getSalons = async (req, res) => {

    try {

        const salons = await getAllSalons();

        res.status(200).json(salons);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch salons',
            error: error.message
        });
    }
};


const getSalon = async (req, res) => {

    try {

        const salon = await getSalonById(req.params.id);

        if (!salon) {
            return res.status(404).json({
                message: 'Salon not found'
            });
        }

        res.status(200).json(salon);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch salon',
            error: error.message
        });
    }
};


const addSalon = async (req, res) => {

    try {

        const {
            name,
            city,
            address,
            rating
        } = req.body;

        if (
            !name ||
            !city ||
            !address ||
            rating === undefined
        ) {
            return res.status(400).json({
                message: 'Name, city, address and rating are required'
            });
        }

        const salon = await createSalon({
            name,
            city,
            address,
            rating
        });

        res.status(201).json(salon);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to create salon',
            error: error.message
        });
    }
};


const updateSalonDetails = async (req, res) => {

    try {

        const salon = await getSalonById(req.params.id);

        if (!salon) {
            return res.status(404).json({
                message: 'Salon not found'
            });
        }

        const updatedSalon = await updateSalon(
            req.params.id,
            req.body
        );

        res.status(200).json(updatedSalon);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to update salon',
            error: error.message
        });
    }
};


const removeSalon = async (req, res) => {

    try {

        const salon = await getSalonById(req.params.id);

        if (!salon) {
            return res.status(404).json({
                message: 'Salon not found'
            });
        }

        await deleteSalon(req.params.id);

        res.status(200).json({
            message: 'Salon deleted successfully'
        });

    } catch (error) {

        res.status(500).json({
            message: 'Failed to delete salon',
            error: error.message
        });
    }
};


const topSalons = async (req, res) => {

    try {

        const salons = await getTopSalons();

        res.status(200).json(salons);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch top salons',
            error: error.message
        });
    }
};


const salonsByCity = async (req, res) => {

    try {

        const salons = await getSalonsByCity(
            req.params.city
        );

        res.status(200).json(salons);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch salons by city',
            error: error.message
        });
    }
};


module.exports = {
    getSalons,
    getSalon,
    addSalon,
    updateSalonDetails,
    removeSalon,
    topSalons,
    salonsByCity
};