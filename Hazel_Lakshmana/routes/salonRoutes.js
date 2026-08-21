const express = require('express');

const {
    getSalons,
    getSalon,
    addSalon,
    updateSalonDetails,
    removeSalon,
    topSalons,
    salonsByCity
} = require('../controllers/salonController');

const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/top', topSalons);

router.get('/city/:city', salonsByCity);

router.get('/', getSalons);

router.get('/:id', getSalon);

router.post('/', authenticateToken, addSalon);

router.put('/:id', authenticateToken, updateSalonDetails);

router.delete('/:id', authenticateToken, removeSalon);

module.exports = router;