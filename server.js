const express = require('express');

const usersRouter = require('./routers/users-router.js');
const postsRouter = require('./routers/posts-router.js');

const cors = require('cors');

const server = express();

// BUILT-IN MIDDLEWARE
server.use(express.json());

// CUSTOM MIDDLEWARE (LOGGER)
server.use(function (req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url}`
  );

  next();
});

// THIRD PARTY MIDDLEWARE
server.use(cors());

server.get('/', (req, res) => {
  res.send('Hello from the WEB API III Challenge server!')
})

// ROUTE HANDLERS ARE ALSO MIDDLEWARE
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter)

// CUSTOM MIDDLEWARE! 
server.use(function(req, res) {
  res.status(404).send("Ain't nobody got time for that!");
});

module.exports = server;
