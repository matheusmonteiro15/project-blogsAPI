const { accessControlService } = require('../services');
const translateStatusToHTTPCode = require('../utils/translateStatusToHTTPCode');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await accessControlService.login(email, password);

  res.status(translateStatusToHTTPCode(status)).json(data);
};

module.exports = {
  login,
};
