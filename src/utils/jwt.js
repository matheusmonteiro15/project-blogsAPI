const jwt = require('jsonwebtoken'); // biblioteca para gerar e verificar tokens JWT (JSON Web Tokens) em aplicativos Node.js

const { JWT_SECRET } = process.env;

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '10m',
  });

  return token;
};

const parseToken = (bearerToken) => bearerToken.split(' ')[1];

const authenticateTokenJWT = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
    generateToken,
    parseToken,
    authenticateTokenJWT,
};
