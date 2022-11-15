const { Router } = require('express');
const router = Router();

const controllerKaryawan = require('../controllers/karyawan');
const controllerCustomer = require('../controllers/customer');
const controllerKendaraan = require('../controllers/kendaraan');
const controllerPengiriman = require('../controllers/pengiriman');
const controllerPenjualan = require('../controllers/penjualan');
const controllerPemasukanKas = require('../controllers/pemasukan_kas');
const controllerPengeluaranKas = require('../controllers/pengeluaran_kas');

router.get('/karyawan', controllerKaryawan.getDataKaryawan);
router.post('/karyawan', controllerKaryawan.addDataKaryawan);
router.put('/karyawan', controllerKaryawan.updateDataKaryawan);
router.delete('/karyawan/:id', controllerKaryawan.deleteDataKaryawan);
router.get('/customer', controllerCustomer.getDataCustomer);
router.get('/customer/:id', controllerCustomer.getDataCustomerById);
router.post('/customer', controllerCustomer.addDataCustomer);
router.put('/customer', controllerCustomer.updateDataCustomer);
router.delete('/customer/:id', controllerCustomer.deleteDataCustomer);
router.get('/kendaraan', controllerKendaraan.getDataKendaraan);
router.post('/kendaraan', controllerKendaraan.addDataKendaraan);
router.put('/kendaraan', controllerKendaraan.updateDataKendaraan);
router.delete('/kendaraan/:id', controllerKendaraan.deleteDataKendaraan);
router.get('/pengiriman', controllerPengiriman.getDataPengiriman);
router.post('/pengiriman', controllerPengiriman.addDataPengiriman);
router.put('/pengiriman', controllerPengiriman.updateDataPengiriman);
router.delete('/pengiriman/:id', controllerPengiriman.deleteDataPengiriman);
router.get('/penjualan', controllerPenjualan.getDataPenjualan);
router.post('/penjualan', controllerPenjualan.addDataPenjualan);
router.put('/penjualan', controllerPenjualan.updateDataPenjualan);
router.delete('/penjualan/:id', controllerPenjualan.deleteDataPenjualan);
router.get('/pemasukan_kas', controllerPemasukanKas.getDataPemasukanKas);
router.post('/pemasukan_kas', controllerPemasukanKas.addDataPemasukanKas);
router.put('/pemasukan_kas', controllerPemasukanKas.updateDataPemasukanKas);
router.delete(
  '/pemasukan_kas/:id',
  controllerPemasukanKas.deleteDataPemasukanKas
);
router.get('/pengeluaran_kas', controllerPengeluaranKas.getDataPengeluaranKas);
router.post('/pengeluaran_kas', controllerPengeluaranKas.addDataPengeluaranKas);
router.put(
  '/pengeluaran_kas',
  controllerPengeluaranKas.updateDataPengeluaranKas
);
router.delete(
  '/pengeluaran_kas/:id',
  controllerPengeluaranKas.deleteDataPengeluaranKas
);
router.post('/uploads/');

module.exports = router;
