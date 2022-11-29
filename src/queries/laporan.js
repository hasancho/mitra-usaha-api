const sumPenjualan = 'SELECT SUM(total_biaya) FROM penjualan';
const sumPengiriman = 'SELECT SUM(biaya_pokok) FROM pengiriman';
const getDataPemasukanRangeDate =
  'select * from pemasukan_kas where tanggal >= $1 and tanggal < $2';
const getDataPengeluaranRangeDate =
  'select * from pengeluaran_kas where tanggal >= $1 and tanggal < $2';
const getDataPenjualanRangeDate =
  'select * from penjualan where updated_at >= $1 and updated_at < $2';
const sumLaba = sumPenjualan - sumPengiriman;

module.exports = {
  sumPenjualan,
  sumLaba,
  sumPengiriman,
  getDataPemasukanRangeDate,
  getDataPengeluaranRangeDate,
  getDataPenjualanRangeDate,
};
