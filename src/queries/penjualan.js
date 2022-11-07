const getDataPenjualan = 'SELECT * FROM penjualan';
const insertDataPenjualan =
  'INSERT INTO penjualan (no_do, quantity, pembayaran, total_biaya, id_customer, id_pengiriman, id_kendaraan, id_karyawan) values ($1, $2, $3, $4, $5, $6, $7, $8)';
const updateDataPenjualan =
  'UPDATE penjualan SET no = $1, quantity = $2, pembayaran = $3 total_biaya = $4, id_customer = $5 id_pengiriman = $6 id_kendaraan = $7 id_karyawan = $8 where id = $9';
const deleteDataPenjualan = 'DELETE FROM penjualan WHERE id = $1';

module.exports = {
  getDataPenjualan,
  insertDataPenjualan,
  updateDataPenjualan,
  deleteDataPenjualan,
};
