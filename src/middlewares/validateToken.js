const { authenticateTokenJWT, parseToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });

  const token = parseToken(bearerToken);

  try {
    const payload = authenticateTokenJWT(token);
    req.user = payload;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
