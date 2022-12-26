const getDataKendaraan = 'SELECT * FROM kendaraan';
const insertDataKendaraan =
  'INSERT INTO kendaraan (kode_jo, no_pol, tahun, jenis, tipe, nomor_rangka, nomor_mesin, masa_berlaku_stnk, masa_berlaku_pajak, masa_berlaku_kir) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
const updateDataKendaraan =
  'UPDATE kendaraan SET kode_jo = $1, no_pol = $2, tahun = $3, jenis = $4, tipe = $5, nomor_rangka = $6, nomor_mesin = $7, masa_berlaku_stnk = $8, masa_berlaku_pajak = $9, masa_berlaku_kir = $10 where id_kendaraan = $11';
const deleteDataKendaraan = 'DELETE FROM kendaraan WHERE id_kendaraan = $1';

module.exports = {
  getDataKendaraan,
  insertDataKendaraan,
  updateDataKendaraan,
  deleteDataKendaraan,
};
