const pool = require('../../config/db');
const queryPengeluaranKas = require('../queries/pengeluaran_kas');

const getDataPengeluaranKas = (req, res) => {
  pool
    .query(queryPengeluaranKas.getDataPengeluaranKas)
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'Failed to get data pengeluaran kas' });
    });
};

const addDataPengeluaranKas = (req, res) => {
  const { tanggal, keterangan, total_pengeluaran_kas } = req.body;
  pool
    .query(queryPengeluaranKas.insertDataPengeluaranKas, [
      tanggal,
      keterangan,
      total_pengeluaran_kas,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to add data pengeluaran kas' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to insert data pengeluaran kas' });
    });
};

const updateDataPengeluaranKas = (req, res) => {
  const { tanggal, keterangan, total_pengeluaran_kas, id } = req.body;
  pool
    .query(queryPengeluaranKas.updateDataPengeluaranKas, [
      tanggal,
      keterangan,
      total_pengeluaran_kas,
      id,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to update data pengeluaran kas' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to update data pengeluaran kas' });
    });
};

const deleteDataPengeluaranKas = (req, res) => {
  const { id } = req.params;

  pool
    .query(queryPengeluaranKas.deleteDataPengeluaranKas, [id])
    .then((result) => {
      return res.status(200).json({
        message: 'successed to delete pengeluaran kas',
      });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to delete pengeluaran kas' });
    });
};

module.exports = {
  getDataPengeluaranKas,
  addDataPengeluaranKas,
  updateDataPengeluaranKas,
  deleteDataPengeluaranKas,
};
