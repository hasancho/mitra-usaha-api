const getDataKendaraan = 'SELECT * FROM kendaraan';
const insertDataKendaraan =
  'INSERT INTO kendaraan (no_pol, tahun, jenis, tipe, nomor_rangka, nomor_mesin, masa_berlaku_stnk, masa_berlaku_pajak, masa_berlaku_kir) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
const updateDataKendaraan =
  'UPDATE kendaraan SET no_pol = $1, tahun = $2, jenis = $3, tipe = $4, nomor_rangka = $5, nomor_mesin = $6, masa_berlaku_stnk = $7, masa_berlaku_pajak = $8, masa_berlaku_kir = $9 where id = $10';
const deleteDataKendaraan = 'DELETE FROM kendaraan WHERE id = $1';

module.exports = {
  getDataKendaraan,
  insertDataKendaraan,
  updateDataKendaraan,
  deleteDataKendaraan,
};
