const db = require('./dbConfig.js');

module.exports = {
    register,
    findBy,
    get
};

function register(newUser) {
    return db('users').insert(newUser);
};

function findBy(username) {
    return db('users')
        .where({username})
        .first();
};

function get() {
    return db('users');
};