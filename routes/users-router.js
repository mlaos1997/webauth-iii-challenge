const router = require("express").Router();
const db = require('../database/dbHelpers.js');
const restrictedMiddleware = require('./restrictedMiddleware.js');

router.get('/', restrictedMiddleware, async(req, res) => {
    try {
        const users = await db.get();
        if (users) {
            res
                .status(200)
                .json(users);
        } else {
            res
                .status(400)
                .json({message: 'No users in database'})
        }
    } catch (err) {
        res
            .status(500)
            .json({message: 'Server cannot process request...'})
    }
});

module.exports = router;