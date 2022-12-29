const jsonwebtokenUtil = require('../utils/jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../../config/db');

const signupUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  const saltRounds = 12;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  pool
    .query(
      'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)',
      [username, email, hashPassword, role]
    )
    .then(() => {
      res.status(200).json({ username: username, email: email, role: role });
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

    const idValue = userByUsername.rows[0].id;
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

const getUsers = (req, res) => {
  pool
    .query('SELECT * From Users')
    .then((result) => {
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const getProfileUser = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const decodeToken = await jsonwebtokenUtil.checkTokenJwt(token);
  const userFindById = await pool.query('SELECT * FROM users WHERE id = $1', [
    decodeToken.id,
  ]);

  if (userFindById == null) {
    return res.status(404).json({ eror: 'User not found' });
  }

  res.status(200).json({
    data: {
      id: userFindById.rows[0].id,
      username: userFindById.rows[0].username,
      role: userFindById.rows[0].role,
    },
  });
};

module.exports = { signupUser, loginUser, getUsers, getProfileUser };
