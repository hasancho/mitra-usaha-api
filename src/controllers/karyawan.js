const pool = require('../../config/db');
const queryKaryawan = require('../queries/karyawan');

const getDataKaryawan = (req, res) => {
  pool
    .query(queryKaryawan.getDatakaryawan)
    .then((result) => {
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Failed to get data' });
    });
};

const addDataKaryawan = (req, res) => {
  const {
    nip,
    nik,
    nama,
    alamat,
    jabatan,
    status_karyawan,
    status_pernikahan,
    tanggal_masuk,
    gaji,
  } = req.body;
  pool
    .query(queryKaryawan.inserDataKaryawan, [
      nip,
      nik,
      nama,
      alamat,
      jabatan,
      status_karyawan,
      status_pernikahan,
      tanggal_masuk,
      gaji,
    ])
    .then((result) => {
      return res.status(200).json({ message: 'Successed to add data' });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Failded to add data' });
    });
};

const updateDataKaryawan = (req, res) => {
  const {
    nip,
    nik,
    nama,
    alamat,
    jabatan,
    status_karyawan,
    status_pernikahan,
    tanggal_masuk,
    gaji,
    id,
  } = req.body;
  pool
    .query(queryKaryawan.updateDataKaryawan, [
      nip,
      nik,
      nama,
      alamat,
      jabatan,
      status_karyawan,
      status_pernikahan,
      tanggal_masuk,
      gaji,
      id,
    ])
    .then((result) => {
      return res.status(200).json({
        message: 'successed to update data',
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: 'failed to update data',
      });
    });
};

const deleteDataKaryawan = (req, res) => {
  const { id } = req.params;
  pool
    .query(queryKaryawan.deleteDataKaryawan, [id])
    .then((result) => {
      return res.status(200).json({
        message: 'successed to delete data',
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: 'failed to delete data',
      });
    });
};

module.exports = {
  getDataKaryawan,
  addDataKaryawan,
  updateDataKaryawan,
  deleteDataKaryawan,
};
