const getDataPemasukanKas = 'SELECT * FROM pemasukan_kas';
const insertDataPemasukanKas =
  'INSERT INTO pemasukan_kas (tanggal, keterangan, file, total_pemasukan_kas) values ($1, $2, $3, $4)';
const updateDataPemasukanKas =
  'UPDATE pemasukan_kas SET tanggal = $1, keterangan = $2, file = $3, total_pemasukan_kas = $4 where id = $5';
const deleteDataPemasukanKas = 'DELETE FROM pemasukan_kas WHERE id = $1';

module.exports = {
  getDataPemasukanKas,
  insertDataPemasukanKas,
  updateDataPemasukanKas,
  deleteDataPemasukanKas,
};
