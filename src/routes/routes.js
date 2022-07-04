const { Router } = require('express');
const router = Router();

const controllerKaryawan = require('../controllers/karyawan');

router.get('/karyawan', controllerKaryawan.getDataKaryawan);
router.post('/karyawan', controllerKaryawan.addDataKaryawan);

module.exports = router;
