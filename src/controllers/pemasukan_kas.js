const express = require('express');
const multer = require('multer');
const uploads = multer({ dest: '../../public/uploads' });
const pool = require('../../config/db');
const queryPemasukanKas = require('../queries/pemasukan_kas');

const getDataPemasukanKas = (req, res) => {
  pool
    .query(queryPemasukanKas.getDataPemasukanKas)
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'Failed to get data pemasukan kas' });
    });
};

const addDataPemasukanKas = (req, res) => {
  const { tanggal, keterangan, total_pemasukan_kas } = req.body;
  pool
    .query(queryPemasukanKas.insertDataPemasukanKas, [
      tanggal,
      keterangan,
      total_pemasukan_kas,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to add data pemasukan kas' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to insert data pemasukan kas' });
    });
};

const updateDataPemasukanKas = (req, res) => {
  const { tanggal, keterangan, total_pemasukan_kas, id } = req.body;
  pool
    .query(queryPemasukanKas.updateDataPemasukanKas, [
      tanggal,
      keterangan,
      total_pemasukan_kas,
      id,
    ])
    .then((result) => {
      console.log(result);
      return res
        .status(200)
        .json({ message: 'successed to update data pemasukan kas' });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to update data pemasukan kas' });
    });
};

const deleteDataPemasukanKas = (req, res) => {
  const { id } = req.params;

  pool
    .query(queryPemasukanKas.deleteDataPemasukanKas, [id])
    .then((result) => {
      return res.status(200).json({
        message: 'successed to delete pemasukan kas',
      });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'failed to delete pemasukan kas' });
    });
};

module.exports = {
  getDataPemasukanKas,
  addDataPemasukanKas,
  updateDataPemasukanKas,
  deleteDataPemasukanKas,
};
