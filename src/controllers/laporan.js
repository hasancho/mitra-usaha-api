const pool = require('../../config/db');
const queryLaporan = require('../queries/laporan');

const sumPenjualan = (req, res) => {
  pool
    .query(queryLaporan.sumPenjualan)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'failed to get sum data penjualan' });
    });
};

const sumLaba = (req, res) => {
  pool.query(queryLaporan.sumLaba).then((result) => {
    res.status(200).json(result.rows);
  });
};

const getPemasukanRangeDate = (req, res) => {
  const { from_tanggal, to_tanggal } = req.body;
  pool
    .query(queryLaporan.getDataPemasukanRangeDate, [from_tanggal, to_tanggal])
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Failed to get data pemasukan' });
    });
};

const getPengeluaranRangeDate = (req, res) => {
  const { from_tanggal, to_tanggal } = req.body;
  pool
    .query(queryLaporan.getDataPengeluaranRangeDate, [from_tanggal, to_tanggal])
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Failed to get data pemasukan' });
    });
};

const getPenjualanRangeDate = (req, res) => {
  const { from_updated_at, to_updated_at } = req.body;
  pool
    .query(queryLaporan.getDataPenjualanRangeDate, [
      from_updated_at,
      to_updated_at,
    ])
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Failed to get data' });
    });
};

module.exports = {
  sumPenjualan,
  sumLaba,
  getPemasukanRangeDate,
  getPengeluaranRangeDate,
  getPenjualanRangeDate,
};
