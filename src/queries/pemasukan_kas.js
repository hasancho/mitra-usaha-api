const getDataPemasukanKas = 'SELECT p.* FROM pemasukan_kas p';
const insertDataPemasukanKas =
  'INSERT INTO pemasukan_kas (tanggal, keterangan, total_pemasukan_kas) values ($1, $2, $3)';
const updateDataPemasukanKas =
  'UPDATE pemasukan_kas SET tanggal = $1, keterangan = $2, total_pemasukan_kas = $3 where id = $4';
const deleteDataPemasukanKas = 'DELETE FROM pemasukan_kas WHERE id = $1';

module.exports = {
  getDataPemasukanKas,
  insertDataPemasukanKas,
  updateDataPemasukanKas,
  deleteDataPemasukanKas,
};
