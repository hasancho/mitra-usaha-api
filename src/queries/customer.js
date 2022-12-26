const getDataCustomer = 'SELECT * FROM customer';
const getDataCustomerById = 'SELECT * FROM customer WHERE id_customer = $1';
const insertDataCustomer =
  'INSERT INTO customer (npwp, nama, alamat, no_telepon) values ($1, $2, $3, $4)';
const updateDataCustomer =
  'UPDATE customer SET npwp = $1, nama = $2, alamat = $3, no_telepon = $4 where id_customer = $5';
const deleteDataCustomer = 'DELETE FROM customer WHERE id_customer = $1';

module.exports = {
  getDataCustomer,
  getDataCustomerById,
  insertDataCustomer,
  updateDataCustomer,
  deleteDataCustomer,
};
