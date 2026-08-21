const {
    getServicesBySalon,
    createService,
    getServiceById,
    updateService,
    deleteService,
    getAvailableServices
} = require('../models/serviceModel');


const getSalonServices = async (req, res) => {

    try {

        const services = await getServicesBySalon(
            req.params.id
        );

        res.status(200).json(services);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch services',
            error: error.message
        });
    }
};


const addService = async (req, res) => {

    try {

        const {
            serviceName,
            price,
            duration,
            isAvailable
        } = req.body;

        if (
            !serviceName ||
            price === undefined ||
            !duration ||
            isAvailable === undefined
        ) {
            return res.status(400).json({
                message:
                    'serviceName, price, duration and isAvailable are required'
            });
        }

        const service = await createService({
            salonId: req.params.id,
            serviceName,
            price,
            duration,
            isAvailable
        });

        res.status(201).json(service);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to create service',
            error: error.message
        });
    }
};


const editService = async (req, res) => {

    try {

        const service = await getServiceById(
            req.params.id
        );

        if (!service) {
            return res.status(404).json({
                message: 'Service not found'
            });
        }

        const updatedService = await updateService(
            req.params.id,
            req.body
        );

        res.status(200).json(updatedService);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to update service',
            error: error.message
        });
    }
};


const removeService = async (req, res) => {

    try {

        const service = await getServiceById(
            req.params.id
        );

        if (!service) {
            return res.status(404).json({
                message: 'Service not found'
            });
        }

        await deleteService(req.params.id);

        res.status(200).json({
            message: 'Service deleted successfully'
        });

    } catch (error) {

        res.status(500).json({
            message: 'Failed to delete service',
            error: error.message
        });
    }
};


const availableServices = async (req, res) => {

    try {

        const services = await getAvailableServices();

        res.status(200).json(services);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch available services',
            error: error.message
        });
    }
};


module.exports = {
    getSalonServices,
    addService,
    editService,
    removeService,
    availableServices
};