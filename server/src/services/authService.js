const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const { CONFIG } = require('../constants/config');

const prisma = new PrismaClient();

/**
 * @class AuthService
 * 
 * Intentional architectural choice: We isolate business logic into this Service layer 
 * to decouple it from HTTP request/response handling. This makes the code easier to test 
 * (mocking Prisma instead of Express) and maintains controller purity.
 */
class AuthService {

    /**
     * Intentional design: Centralizing token generation ensures that if we ever alter 
     * our JWT payload structure (e.g., adding roles or session IDs), we only have to 
     * update it in a single, predictable location.
     */
    generateToken(userId) {
        return jwt.sign({ userId }, CONFIG.JWT.SECRET, { expiresIn: CONFIG.JWT.EXPIRES_IN });
    }

    async register({ email, password, firstName, lastName }) {
        const normalizedEmail = email.toLowerCase();

        const existingUser = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (existingUser) {
            throw new AppError('User already exists', 400);
        }

        const hashedPassword = await bcrypt.hash(password, CONFIG.SECURITY.SALT_ROUNDS);

        const user = await prisma.user.create({
            data: {
                email: normalizedEmail,
                password: hashedPassword,
                firstName,
                lastName,
            },
        });

        const token = this.generateToken(user.id);

        return { user, token };
    }

    async login({ email, password }) {
        const normalizedEmail = email.toLowerCase();

        const user = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (!user) {
            // Using a generic "Invalid credentials" message intentionally to prevent 
            // malicious actors from enumerating valid email addresses.
            throw new AppError('Invalid credentials', 401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw new AppError('Invalid credentials', 401);
        }

        const token = this.generateToken(user.id);

        return { user, token };
    }
}

module.exports = new AuthService();
