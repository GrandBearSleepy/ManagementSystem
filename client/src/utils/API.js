import axios from "axios";

export default {
  // Gets all Customers
  getCustomers: function () {
    return axios.get('/api/customers');
  },
  // Gets the customer with the given id
  getCustomer: function (id) {
    return axios.get('/api/customers/' + id);
  },
  // Deletes the customer with the given id
  deleteCustomer: function (id) {
    return axios.delete('/api/customers/' + id);
  },
  updateCustomer: function (id) {
    return axios.put('/api/customer/' + id)
  },
  // Saves a customer to the database
  saveCustomer: function (customerData) {
    return axios.post('/api/customers', customerData);
  },

  // Gets all Customers
  getCleaners: function () {
    return axios.get('/api/cleaners');
  },
  // Gets the customer with the given id
  getCleaner: function (id) {
    return axios.get('/api/cleaners/' + id);
  },
  // Deletes the customer with the given id
  deleteCleaner: function (id) {
    return axios.delete('/api/cleaners/' + id);
  },
  // Saves a customer to the database
  saveCleaner: function (customerData) {
    return axios.post('/api/cleaners', customerData);
  }
};

