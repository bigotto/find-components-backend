const express = require('express');
const FirebaseController = require('./controllers/FirebaseController');
const DbController = require('./controllers/DbController');

const routes = express.Router();

routes.get('/login', FirebaseController.load);
routes.post('/signup', FirebaseController.create);
routes.get('/db', DbController.components);

module.exports = routes;
