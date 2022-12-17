const sumPenjualan = 'SELECT SUM(penjualan_sesudah_pajak) FROM penjualan';
const sumPemasukanKas = 'SELECT SUM(total_pemasukan_kas) FROM pemasukan_kas';
const sumPengeluaranKas =
  'SELECT SUM(total_pengeluaran_kas) FROM pengeluaran_kas';
const sumPengiriman = 'SELECT SUM(biaya_pokok) FROM pengiriman';
const getDataPemasukanRangeDate = `select *, TO_CHAR(tanggal, 'DD-MM-YYYY ') as tanggal from pemasukan_kas where tanggal >= $1 and tanggal < $2`;
const getDataPengeluaranRangeDate = `select *, TO_CHAR(tanggal, 'DD-MM-YYYY ') as tanggal from pengeluaran_kas where tanggal >= $1 and tanggal < $2`;
const getTotalPemasukanRangeDate =
  'select sum(total_pemasukan_kas) from pemasukan_kas where tanggal >= $1 and tanggal < $2';
const getTotalPengeluaranRangeDate =
  'select sum(total_pengeluaran_kas) from pengeluaran_kas where tanggal >= $1 and tanggal < $2';

const getDataPenjualanRangeDate = `select * from penjualan 
  LEFT JOIN pengiriman
    ON penjualan.id_pengiriman = pengiriman.id
    LEFT JOIN kendaraan
    ON penjualan.id_pengiriman = kendaraan.id
  where 
    tanggal >= $1 and  tanggal < $2 `;
// const sumLaba = sumPenjualan - sumPengiriman;
// const getDataPenjualan = `SELECT * FROM penjualan
// LEFT JOIN pengiriman
//     ON penjualan.id_pengiriman = pengiriman.id`;
module.exports = {
  sumPenjualan,
  // sumLaba,
  // sumPengiriman,
  sumPemasukanKas,
  sumPengeluaranKas,
  getDataPemasukanRangeDate,
  getDataPengeluaranRangeDate,
  getDataPenjualanRangeDate,
  getTotalPemasukanRangeDate,
  getTotalPengeluaranRangeDate,
};
