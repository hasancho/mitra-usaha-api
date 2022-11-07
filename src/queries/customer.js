const getDataCustomer = 'SELECT * FROM customer';
const insertDataCustomer =
  'INSERT INTO customer (npwp, nama, alamat, no_telepon) values ($1, $2, $3, $4)';
const updateDataCustomer =
  'UPDATE customer SET npwp = $1, nama = $2, alamat = $3, no_telepon = $4 where id = $5';
const deleteDataCustomer = 'DELETE FROM customer WHERE id = $1';

module.exports = {
  getDataCustomer,
  insertDataCustomer,
  updateDataCustomer,
  deleteDataCustomer,
};
