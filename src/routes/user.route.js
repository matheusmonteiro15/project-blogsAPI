const route = require('express').Router();
const { userManagerController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.post('/', userManagerController.create);
route.get('/', validateToken, userManagerController.retrieveAllRecords);
route.get('/:id', validateToken, userManagerController.retrieveByID);
route.delete('/me', validateToken, userManagerController.terminateAccount);

module.exports = route;
