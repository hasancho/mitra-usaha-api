const { Router } = require('express');
const router = Router();

const controllerKaryawan = require('../controllers/karyawan');
const controllerCustomer = require('../controllers/customer');
const controllerKendaraan = require('../controllers/kendaraan');
const controllerPengiriman = require('../controllers/pengiriman');
const controllerPenjualan = require('../controllers/penjualan');

router.get('/karyawan', controllerKaryawan.getDataKaryawan);
router.post('/karyawan', controllerKaryawan.addDataKaryawan);
router.put('/karyawan', controllerKaryawan.updateDataKaryawan);
router.delete('/karyawan/:id', controllerKaryawan.deleteDataKaryawan);
router.get('/customer', controllerCustomer.getDataCustomer);
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

module.exports = router;
