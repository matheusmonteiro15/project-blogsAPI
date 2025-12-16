const accessControlService = require('./login.service');
const userManagerService = require('./user.service');
const categoriesManagerService = require('./categories.service');
const postManagerService = require('./post.service');

module.exports = {
    accessControlService,
    userManagerService,
    categoriesManagerService,
    postManagerService,
};
