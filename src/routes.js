const express = require('express');
const routes = express.Router();
const DevController = require('./Controllers/DevController');
const DevSearchController = require('./Controllers/DevSearchController');

routes.get('/devs',DevController.index);
routes.post('/dev',DevController.create);

routes.get('/search',DevSearchController.index);

module.exports = routes;  