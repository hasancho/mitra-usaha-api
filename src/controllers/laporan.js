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

const sumPemasukanKas = (req, res) => {
  pool
    .query(queryLaporan.sumPemasukanKas)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'failed to get sum data pemasukan kas' });
    });
};

const sumPengeluaranKas = (req, res) => {
  pool
    .query(queryLaporan.sumPengeluaranKas)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: 'failed to get sum data pengeluaran kas' });
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

const getTotalPemasukanRangeDate = (req, res) => {
  const { from_tanggal, to_tanggal } = req.body;
  pool
    .query(queryLaporan.getTotalPemasukanRangeDate, [from_tanggal, to_tanggal])
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'Failed to get total data pemasukan' });
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

const getTotalPengeluaranRangeDate = (req, res) => {
  const { from_tanggal, to_tanggal } = req.body;
  pool
    .query(queryLaporan.getTotalPengeluaranRangeDate, [
      from_tanggal,
      to_tanggal,
    ])
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: 'Failed to get total data pengeluaran' });
    });
};

const getPenjualanRangeDate = (req, res) => {
  const { from_tanggal, to_tanggal } = req.body;
  pool
    .query(queryLaporan.getDataPenjualanRangeDate, [from_tanggal, to_tanggal])
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Failed to get data' });
    });
};

const getTotalPenjualanRangeDate = (req, res) => {
  const { from_tanggal, to_tanggal } = req.body;
  pool
    .query(
      `select sum(penjualan_sebelum_pajak) as penjualan_sebelum_pajak, sum(penjualan_sesudah_pajak) as penjualan_sesudah_pajak from penjualan 
    where 
      tanggal >= $1 and  tanggal < $2 `,
      [from_tanggal, to_tanggal]
    )
    .then((result) => {
      console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Failed to get data' });
    });
};

const getTotalLabaRangeDate = (req, res) => {
  const { from_tanggal, to_tanggal } = req.body;
  pool
    .query(
      `select sum(penjualan_sebelum_pajak) as total_penjualan_sebelum_pajak, sum(biaya_pokok) as total_biaya_pokok, sum(penjualan_sebelum_pajak - biaya_pokok) as total_laba  From penjualan as p 
      LEFT JOIN pengiriman
        ON p.id_pengiriman = pengiriman.id_pengiriman
        LEFT JOIN kendaraan
        ON p.id_kendaraan = kendaraan.id_kendaraan
    where 
      tanggal >= $1 and  tanggal < $2`,
      [from_tanggal, to_tanggal]
    )
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
  sumPemasukanKas,
  sumPengeluaranKas,
  sumLaba,
  getPemasukanRangeDate,
  getPengeluaranRangeDate,
  getPenjualanRangeDate,
  getTotalPenjualanRangeDate,
  getTotalPemasukanRangeDate,
  getTotalPengeluaranRangeDate,
  getTotalLabaRangeDate,
};
