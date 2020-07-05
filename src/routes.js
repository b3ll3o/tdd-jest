const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
  name: 'leo', 
  email: 'leo@teste.com', 
  password_hash: '123'
});

module.exports = routes;