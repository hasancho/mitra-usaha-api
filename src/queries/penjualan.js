const getDataPenjualan = `SELECT * FROM penjualan
LEFT JOIN customer
    ON penjualan.id_customer = customer.id_customer
LEFT JOIN pengiriman
    ON penjualan.id_pengiriman = pengiriman.id_pengiriman
LEFT JOIN kendaraan
   ON penjualan.id_kendaraan = kendaraan.id_kendaraan    
`;
const insertDataPenjualan =
  'INSERT INTO penjualan (no_do, quantity, pembayaran, penjualan_sebelum_pajak, id_customer, id_pengiriman, id_kendaraan, tanggal, status_pajak, penjualan_sesudah_pajak) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
const updateDataPenjualan =
  'UPDATE penjualan SET no_do = $1, quantity = $2, pembayaran = $3, penjualan_sebelum_pajak = $4, id_customer = $5, id_pengiriman = $6, id_kendaraan = $7, tanggal = $8, status_pajak = $9, penjualan_sesudah_pajak = $10 where id = $11';
const deleteDataPenjualan = 'DELETE FROM penjualan WHERE id = $1';

module.exports = {
  getDataPenjualan,
  insertDataPenjualan,
  updateDataPenjualan,
  deleteDataPenjualan,
};
