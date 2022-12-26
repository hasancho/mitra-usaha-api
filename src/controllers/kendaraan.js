const pool = require('../../config/db');
const queryKendaraan = require('../queries/kendaraan');

const getDataKendaraan = (req, res) => {
  pool
    .query(queryKendaraan.getDataKendaraan)
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'failed to get data kendaraan' });
    });
};

const addDataKendaraan = (req, res) => {
  const {
    kode_jo,
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
      kode_jo,
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
    kode_jo,
    no_pol,
    tahun,
    jenis,
    tipe,
    nomor_rangka,
    nomor_mesin,
    masa_berlaku_stnk,
    masa_berlaku_pajak,
    masa_berlaku_kir,
    id_kendaraan,
  } = req.body;
  pool
    .query(queryKendaraan.updateDataKendaraan, [
      kode_jo,
      no_pol,
      tahun,
      jenis,
      tipe,
      nomor_rangka,
      nomor_mesin,
      masa_berlaku_stnk,
      masa_berlaku_pajak,
      masa_berlaku_kir,
      id_kendaraan,
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
  const { id_kendaraan } = req.params;
  pool
    .query(queryKendaraan.deleteDataKendaraan, [id_kendaraan])
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
