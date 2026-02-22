/**
 * Centralized Configuration Constants
 * 
 * Intentional design: By extracting all "magic variables" from controllers 
 * and services into a single configuration source of truth, we ensure that
 * security policies (like salt rounds and token lifespans) can be audited 
 * and updated without hunting through the codebase.
 */

require('dotenv').config();

exports.CONFIG = {
    JWT: {
        SECRET: process.env.JWT_SECRET || 'your-secret-key',
        EXPIRES_IN: '24h',
    },
    SECURITY: {
        // 10 rounds strikes an optimal human-centered balance between 
        // brute-force resistance and acceptable login latency for the user.
        SALT_ROUNDS: 10,
    }
};
