const router = require("express").Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secrets = require('../secrets.js');
const db = require('../database/dbHelpers.js');

router.post('/', validate, async(req, res) => {
    const { username, password } = req.body;
    const user = await db.findBy(username);
    try {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({ message: `Welcome ${user.username}! Your token: ${token}`})
        } else {
            res.status(401).json({message: 'Username or password is incorrect'})
        }
    } catch (err) {
        res.status(500).json({ message: 'Server cannot process request...' })
    };
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
};

function validate(req, res, next) {
    try {
        const { username, password } = req.body;
        if (username.length && password.length) {
            next();
        } else {
            res.status(400).json({ message: 'Username and password are required.' })
        }
    } catch (err) {
        res.status(500).json({message: 'Server cannot process request...'});
    }
};

module.exports = router;