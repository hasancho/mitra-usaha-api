const pool = require('../../config/db');
const queryPengiriman = require('../queries/pengiriman');

const getDataPengiriman = (req, res) => {
  pool
    .query(queryPengiriman.getDataPengiriman)
    .then((result) => {
      console.log(result);
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'failed to get data pengiriman' });
    });
};

const addDataPengiriman = (req, res) => {
  const { tujuan, tarif, biaya_pokok, material } = req.body;
  pool
    .query(queryPengiriman.insertDataPengiriman, [
      tujuan,
      tarif,
      biaya_pokok,
      material,
    ])
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'successed to insert data pengiriman' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'failed to insert data pengiriman' });
    });
};

const updateDataPengiriman = (req, res) => {
  const { tujuan, tarif, biaya_pokok, material, id } = req.body;
  pool
    .query(queryPengiriman.updateDataPengiriman, [
      tujuan,
      tarif,
      biaya_pokok,
      material,
      id,
    ])
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'successed to insert data pengiriman' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'failed to insert data pengiriman' });
    });
};

const deleteDataPengiriman = (req, res) => {
  const { id } = req.params;
  pool
    .query(queryPengiriman.deleteDataPengiriman, [id])
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'successed to delete data pengiriman' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'failed to delete data pengiriman' });
    });
};

module.exports = {
  getDataPengiriman,
  addDataPengiriman,
  updateDataPengiriman,
  deleteDataPengiriman,
};
