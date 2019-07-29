const router = require("express").Router();
const bcrypt = require('bcryptjs');
const db = require('../database/dbHelpers.js');

router.post('/', validate, async(req, res) => {
    const newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hash;
    try {
        const registerUser = await db.register(newUser);
        res
            .status(201)
            .json(registerUser);
    } catch (err) {
        res
            .status(500)
            .json({message: 'Server cannot process request...'});
    }
});

function validate(req, res, next) {
    try {
        const {username, password, department} = req.body;
        if (username.length && password.length && department.length) {
            next();
        } else {
            res
                .status(400)
                .json({message: 'All fields are required'})
        }
    } catch (err) {
        res
            .status(500)
            .json({message: 'Server cannot process request...'});
    }
};

module.exports = router;