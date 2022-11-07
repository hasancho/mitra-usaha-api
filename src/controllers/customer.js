const pool = require('../../config/db');
const queryCustomer = require('../queries/customer');

const getDataCustomer = (req, res) => {
  pool
    .query(queryCustomer.getDataCustomer)
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Failed to get data customer' });
    });
};

const addDataCustomer = (req, res) => {
  const { npwp, nama, alamat, no_telepon } = req.body;
  pool
    .query(queryCustomer.insertDataCustomer, [npwp, nama, alamat, no_telepon])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to add data customer' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to insert data customer' });
    });
};

const updateDataCustomer = (req, res) => {
  const { npwp, nama, alamat, no_telepon, id } = req.body;
  pool
    .query(queryCustomer.updateDataCustomer, [
      npwp,
      nama,
      alamat,
      no_telepon,
      id,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to update data customer' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to update data customer' });
    });
};

const deleteDataCustomer = (req, res) => {
  const { id } = req.params;

  pool
    .query(queryCustomer.deleteDataCustomer, [id])
    .then((result) => {
      return res.status(200).json({
        message: 'successed to delete customer',
      });
    })
    .then((err) => {
      console.log(err);
      return res.status(500).json({ message: 'failed to delete customer' });
    });
};

module.exports = {
  getDataCustomer,
  addDataCustomer,
  updateDataCustomer,
  deleteDataCustomer,
};
