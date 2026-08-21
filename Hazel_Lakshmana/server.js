const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const salonRoutes = require('./routes/salonRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

const requestLogger = require('./middleware/requestLogger');

const app = express();

app.use(express.json());

app.use(requestLogger);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Salon APIs'
    });
});

app.use('/', authRoutes);
app.use('/salons', salonRoutes);
app.use('/', serviceRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});