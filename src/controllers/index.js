const accessControlController = require('./login.controller');
const userManagerController = require('./user.controller');
const categoriesManagerController = require('./categories.controller');
const postManagerController = require('./post.controller');

module.exports = {
    accessControlController,
    userManagerController,
    categoriesManagerController,
    postManagerController,
};
