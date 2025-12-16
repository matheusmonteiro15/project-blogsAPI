const { categoriesManagerService } = require('../services');
const translateStatusToHTTPCode = require('../utils/translateStatusToHTTPCode');

const create = async (req, res) => {
  const { status, data } = await categoriesManagerService.create(req.body);

  res.status(translateStatusToHTTPCode(status)).json(data);
};

const retrieveAllRecords = async (req, res) => {
    const { status, data } = await categoriesManagerService.retrieveAllRecords();
  
    res.status(translateStatusToHTTPCode(status)).json(data);
  };

module.exports = {
  create,
  retrieveAllRecords,
};
