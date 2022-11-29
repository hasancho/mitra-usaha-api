const jsonwebtokenUtil = require('../utils/jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../../config/db');

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 12;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  pool
    .query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashPassword]
    )
    .then(() => {
      res
        .status(200)
        .json({ username: username, email: email, password: hashPassword });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json('failed to sign up user');
    });
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userByUsername = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    const idValue = userByUsername.rows[0].username;
    const usernameValue = userByUsername.rows[0].username;
    const passwordValue = userByUsername.rows[0].password;

    if (usernameValue == null) {
      res.status(404).json({ error: 'User not found. Register First' });
      return;
    }

    const checkUserPassword = await bcrypt.compare(password, passwordValue);
    if (checkUserPassword == false) {
      res.status(401).json({ error: 'Username or password incorrect.' });
      return;
    }

    const generatedToken = jsonwebtokenUtil.encodeTokenJwt({
      id: idValue,
      username: usernameValue,
    });

    res.status(200).json({
      message: 'Logged successfully',
      token: generatedToken,
    });
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: 'Failed to login' });
  }
};

module.exports = { signupUser, loginUser };
