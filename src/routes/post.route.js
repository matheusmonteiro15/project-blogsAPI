const route = require('express').Router();

const { postManagerController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateToken, postManagerController.create);
route.get('/', validateToken, postManagerController.retrieveAllRecords);
route.get('/search', validateToken, postManagerController.queryBlogPosts);
route.get('/:id', validateToken, postManagerController.retrieveByID);
route.put('/:id', validateToken, postManagerController.editPost);

module.exports = route;
