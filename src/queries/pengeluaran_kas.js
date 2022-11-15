const getDataPengeluaranKas = 'SELECT * FROM pengeluaran_kas';
const insertDataPengeluaranKas =
  'INSERT INTO pengeluaran_kas (tanggal, keterangan, total_pengeluaran_kas) values ($1, $2, $3)';
const updateDataPengeluaranKas =
  'UPDATE pengeluaran_kas SET tanggal = $1, keterangan = $2, total_pengeluaran_kas = $3, where id = $4';
const deleteDataPengeluaranKas = 'DELETE FROM pengeluaran_kas WHERE id = $1';

module.exports = {
  getDataPengeluaranKas,
  insertDataPengeluaranKas,
  updateDataPengeluaranKas,
  deleteDataPengeluaranKas,
};
