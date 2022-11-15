const pool = require('../../config/db');
const queryPenjualan = require('../queries/penjualan');

const getDataPenjualan = (req, res) => {
  pool
    .query(queryPenjualan.getDataPenjualan)
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json('failed to get data penjualan');
    });
};

const addDataPenjualan = (req, res) => {
  const {
    no_do,
    quantity,
    pembayaran,
    total_biaya,
    id_customer,
    id_pengiriman,
    id_kendaraan,
    id_karyawan,
  } = req.body;

  pool
    .query(queryPenjualan.insertDataPenjualan, [
      no_do,
      quantity,
      pembayaran,
      total_biaya,
      id_customer,
      id_pengiriman,
      id_kendaraan,
      id_karyawan,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to insert data penjualan' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to insert data penjualan' });
    });
};

const updateDataPenjualan = (req, res) => {
  const {
    no_do,
    quantity,
    pembayaran,
    total_biaya,
    id_customer,
    id_pengiriman,
    id_kendaraan,
    id_karyawan,
    id,
  } = req.body;

  pool
    .query(queryPenjualan.updateDataPenjualan, [
      no_do,
      quantity,
      pembayaran,
      total_biaya,
      id_customer,
      id_pengiriman,
      id_kendaraan,
      id_karyawan,
      id,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to update data penjualan' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to update data penjualan' });
    });
};

const deleteDataPenjualan = (req, res) => {
  const { id } = req.params;
  pool
    .query(queryPenjualan.deleteDataPenjualan, [id])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to delete data penjualan' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to delete data penjualan' });
    });
};

module.exports = {
  getDataPenjualan,
  addDataPenjualan,
  updateDataPenjualan,
  deleteDataPenjualan,
};
