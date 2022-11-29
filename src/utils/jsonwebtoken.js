require('dotenv').config();
const jwt = require('jsonwebtoken');

const encodeTokenJwt = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '5h' });
};

module.exports = { encodeTokenJwt };
