require('dotenv').config();
const jwt = require('jsonwebtoken');

const encodeTokenJwt = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '5h' });
};

const checkTokenJwt = async (token) => {
  return await jwt.verify(token, process.env.TOKEN_SECRET);
};

module.exports = { encodeTokenJwt, checkTokenJwt };
