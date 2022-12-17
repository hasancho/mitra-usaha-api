const getDataPengiriman = `SELECT * FROM pengiriman`;
const insertDataPengiriman =
  'INSERT INTO pengiriman (kode_tujuan, tujuan, tarif, biaya_pokok, komisi) values ($1, $2, $3, $4, $5)';
const updateDataPengiriman =
  'UPDATE pengiriman SET kode_tujuan = $1, tujuan = $2, tarif = $3, biaya_pokok = $4, komisi = $5 where id = $6';
const deleteDataPengiriman = 'DELETE FROM pengiriman WHERE id = $1';

module.exports = {
  getDataPengiriman,
  insertDataPengiriman,
  updateDataPengiriman,
  deleteDataPengiriman,
};
