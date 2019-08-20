const routes = require('express').Router();
const {User} = require('./app/models');

User.create({name: 'Mateus', email: 'contato@mateuscosta.dev',password_hash: 'ashgsdkhasgdhkjasdhjkasgdahksjgdas'})

module.exports  = routes;