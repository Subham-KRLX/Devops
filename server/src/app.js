const express = require('express');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: ['http://localhost:5173', 'http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
);
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'SparkSpirit Shop Backend is running',
        timestamp: new Date().toISOString(),
    });
});

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', require('./routes/orderRoutes'));
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'SparkSpirit Shop Backend is running',
        timestamp: new Date().toISOString(),
    });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
