const express = require('express');

const {
    getSalonServices,
    addService,
    editService,
    removeService,
    availableServices
} = require('../controllers/serviceController');

const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get(
    '/services/available',
    availableServices
);

router.get(
    '/salons/:id/services',
    getSalonServices
);

router.post(
    '/salons/:id/services',
    authenticateToken,
    addService
);

router.put(
    '/services/:id',
    authenticateToken,
    editService
);

router.delete(
    '/services/:id',
    authenticateToken,
    removeService
);

module.exports = router;