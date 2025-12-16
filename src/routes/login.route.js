const route = require('express').Router();
const { accessControlController } = require('../controllers');
const validateLogin = require('../middlewares/validateLogin');

route.post('/', validateLogin, accessControlController.login);

module.exports = route;
