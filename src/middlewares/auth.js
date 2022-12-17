const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const authToken = (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // console.log(token);

  if (token == null) {
    return res.status(401).json({ message: 'unauthorizated' });
  }

  try {
    const decode = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    if (decode == null) {
      return res.status(401).json({ message: 'unauthorizated' });
    }
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
};

module.exports = authToken;
