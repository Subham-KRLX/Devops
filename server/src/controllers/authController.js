const asyncHandler = require('express-async-handler');
const authService = require('../services/authService');

exports.register = asyncHandler(async (req, res) => {
    const { user, token } = await authService.register(req.body);

    res.status(201).json({
        message: 'User registered successfully',
        token,
        user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        },
    });
});

exports.login = asyncHandler(async (req, res) => {
    const { user, token } = await authService.login(req.body);

    res.status(200).json({
        message: 'Login successful',
        token,
        user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        },
    });
});
