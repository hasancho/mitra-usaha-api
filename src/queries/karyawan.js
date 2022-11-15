const getDatakaryawan = 'SELECT * FROM karyawan';
const inserDataKaryawan =
  'INSERT INTO karyawan (nip, nik, nama, alamat, jabatan, status_karyawan, status_pernikahan, tanggal_masuk, gaji) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
const updateDataKaryawan =
  'UPDATE karyawan SET nip = $1, nik = $2, nama = $3, alamat = $4, jabatan = $5, status_karyawan = $6, status_pernikahan = $7, tanggal_masuk = $8, gaji = $9 where id = $10';
const deleteDataKaryawan = 'DELETE FROM karyawan WHERE id = $1';

module.exports = {
  getDatakaryawan,
  inserDataKaryawan,
  updateDataKaryawan,
  deleteDataKaryawan,
};
