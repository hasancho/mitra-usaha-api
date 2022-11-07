const pool = require('../../config/db');
const queryKendaraan = require('../queries/kendaraan');

const getDataKendaraan = (req, res) => {
  pool
    .query(queryKendaraan.getDataKendaraan)
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .then((err) => {
      console.log(err);
      res.status(500).json({ message: 'failed to get data kendaraan' });
    });
};

const addDataKendaraan = (req, res) => {
  const {
    no_pol,
    tahun,
    jenis,
    tipe,
    nomor_rangka,
    nomor_mesin,
    masa_berlaku_stnk,
    masa_berlaku_pajak,
    masa_berlaku_kir,
  } = req.body;
  pool
    .query(queryKendaraan.insertDataKendaraan, [
      no_pol,
      tahun,
      jenis,
      tipe,
      nomor_rangka,
      nomor_mesin,
      masa_berlaku_stnk,
      masa_berlaku_pajak,
      masa_berlaku_kir,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to add data kendaraan' });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'failed to add data kendaraan' });
    });
};

const updateDataKendaraan = (req, res) => {
  const {
    id,
    no_pol,
    tahun,
    jenis,
    tipe,
    nomor_rangka,
    nomor_mesin,
    masa_berlaku_stnk,
    masa_berlaku_pajak,
    masa_berlaku_kir,
  } = req.body;
  pool
    .query(queryKendaraan.updateDataKendaraan, [
      no_pol,
      tahun,
      jenis,
      tipe,
      nomor_rangka,
      nomor_mesin,
      masa_berlaku_stnk,
      masa_berlaku_pajak,
      masa_berlaku_kir,
      id,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to update data kendaraan' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'failed to update data kendaraan' });
    });
};

const deleteDataKendaraan = (req, res) => {
  const { id } = req.params;
  pool
    .query(queryKendaraan.deleteDataKendaraan, [id])
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'successed to delete data kendaraan' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'failed to delete data kendaraan' });
    });
};

module.exports = {
  getDataKendaraan,
  addDataKendaraan,
  updateDataKendaraan,
  deleteDataKendaraan,
};
