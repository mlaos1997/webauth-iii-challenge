const jwt = require('jsonwebtoken');
const secrets = require('../secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'Not authorized'})
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    } else {
        res.status(500).json({ message: 'Server cannot process request...'})
    }
};