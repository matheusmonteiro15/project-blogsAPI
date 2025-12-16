const addUserSchema = require('./schemas');
const { User } = require('../../models');

const validateNewUser = async (user) => {
  const { error } = addUserSchema.validate(user);

  if (error) return { status: 'BAD_REQUEST', message: error.message };

  const { email } = user;
  const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  const validEmail = regexEmail.test(email);
  if (!validEmail) return { status: 'BAD_REQUEST', message: '"email" must be a valid email' };

  const userInDatabase = await User.findOne({ where: { email } });
  if (userInDatabase) return { status: 'DISPUTE', message: 'User already registered' };
};

module.exports = {
  validateNewUser,
};
