const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../../config/db');

const signUp = (req, res) => {
  const { username, email, password, roles } = req.body;
  console.log(username, email, password, roles);
  pool
    .query(
      `INSERT INTO users  (username, email, password) VALUES ($1, $2, $3)`,
      [username, email, password]
    )
    .then(() => {
      if (req.body.roles) {
        pool.query(`SELECT * FROM roles WHERE name = $1`, [roles]).then(() => {
          pool
            .query('INSERT INTO roles (name) values ($1)', [roles])
            .then(() => {
              res.json({ message: 'successed to register user' });
            });
        });
      } else {
        pool.query('INSERT INTO roles (nama) values (1)').then((result) => {
          res.json({ message: 'successed to register user', data: result });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { signUp };
