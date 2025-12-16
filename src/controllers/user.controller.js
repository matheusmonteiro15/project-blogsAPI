const { userManagerService } = require('../services');
const translateStatusToHTTPCode = require('../utils/translateStatusToHTTPCode');

const create = async (req, res) => {
  const { status, data } = await userManagerService.create(req.body);

  res.status(translateStatusToHTTPCode(status)).json(data);
};

const retrieveAllRecords = async (req, res) => {
    const { status, data } = await userManagerService.retrieveAllRecords();
  
    res.status(translateStatusToHTTPCode(status)).json(data);
  };

const retrieveByID = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await userManagerService.retrieveByID(id);
  
    res.status(translateStatusToHTTPCode(status)).json(data);
  };

  const terminateAccount = async (req, res) => {
    const { userId } = req.user;
    const { status } = await userManagerService.terminateAccount(userId);

    return res.status(translateStatusToHTTPCode(status)).end();
  };

module.exports = {
  create,
  retrieveAllRecords,
  retrieveByID,
  terminateAccount,
};
