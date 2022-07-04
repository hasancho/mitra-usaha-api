const getDatakaryawan = 'SELECT * FROM karyawan';
const inserDataKaryawan =
  'INSERT INTO karyawan (nip, nik, nama, alamat, status_karyawan, status_pernikahan, tanggal_masuk, gaji) values ($1, $2, $3, $4, $5, $6, $7, $8)';
const updateDataKaryawan =
  'UPDATE karyawan SET nip = $1, nik = $2, nama = $3, alamat = $4, status_karyawan = $5, status_pernikahan = $6, tanggal_masuk = $7, gaji = $8';
const deleteDataKaryawan = 'DELETE FROM karyawan WHERE id = $1';

module.exports = {
  getDatakaryawan,
  inserDataKaryawan,
  updateDataKaryawan,
  deleteDataKaryawan,
};
