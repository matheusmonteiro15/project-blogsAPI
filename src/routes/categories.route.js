const route = require('express').Router();
const { categoriesManagerController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateToken, categoriesManagerController.create);
route.get('/', validateToken, categoriesManagerController.retrieveAllRecords);

module.exports = route;
