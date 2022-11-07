const getDataPengiriman = 'SELECT * FROM pengiriman';
const insertDataPengiriman =
  'INSERT INTO pengiriman (tujuan, tarif, biaya_pokok, material) values ($1, $2, $3, $4)';
const updateDataPengiriman =
  'UPDATE pengiriman SET tujuan = $1, tarif = $2, biaya_pokok = $3, material = $4 where id = $5';
const deleteDataPengiriman = 'DELETE FROM pengiriman WHERE id = $1';

module.exports = {
  getDataPengiriman,
  insertDataPengiriman,
  updateDataPengiriman,
  deleteDataPengiriman,
};
