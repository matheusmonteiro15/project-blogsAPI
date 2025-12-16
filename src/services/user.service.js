const validation = require('./validations/validationUserValues');
const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const create = async (user) => {
  const error = await validation.validateNewUser(user);

  if (error) return { status: error.status, data: { message: error.message } };

  const { displayName, email, password, image } = user;
  await User.create({ displayName, email, password, image });
  const token = generateToken({ email });

  return { status: 'CREATED', data: { token } };
};

const retrieveAllRecords = async () => {
    const data = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return { status: 'SUCCESSFUL', data };
  };

const retrieveByID = async (id) => {
    const data = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
    if (!data) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  
    return { status: 'SUCCESSFUL', data };
  };

  const terminateAccount = async (id) => {
    await User.destroy(
      { where: { id } },
    );
    return { status: 'TERMINATED' };
  };

module.exports = {
  create,
  retrieveAllRecords,
  retrieveByID,
  terminateAccount,
};
