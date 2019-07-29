const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerRouter = require('./routes/register-router.js');
// const loginRouter = require('../routes/login-router.js');
// const usersRouter = require('../routes/users-router.js');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth/register', registerRouter);
// server.use('/api/auth/login', loginRouter);
// server.use('/api/auth/users', usersRouter);

server.get('/', (req, res) => {
    res.send("It's alive!");
});
  
  module.exports = server;