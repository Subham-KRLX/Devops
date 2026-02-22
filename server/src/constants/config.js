

require('dotenv').config();

exports.CONFIG = {
    JWT: {
        SECRET: process.env.JWT_SECRET || 'your-secret-key',
        EXPIRES_IN: '24h',
    },
    SECURITY: {

        SALT_ROUNDS: 10,
    }
};
