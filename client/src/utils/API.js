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
  updateCustomer: function (id, update) {
    return axios.put('/api/customers/' + id, update)
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
  },

  getJobs: function () {
    return axios.get('/api/jobs');
  },
  // Gets the customer with the given id
  getJob: function (id) {
    return axios.get('/api/jobs/' + id);
  },
  // Deletes the customer with the given id
  deleteJob: function (id) {
    return axios.delete('/api/jobs/' + id);
  },
  // Saves a customer to the database
  saveJob: function (customerData) {
    return axios.post('/api/jobs', customerData);
  },
  addJobToCustomer: function (customerId, jobId) {
    console.log("Attempting to add job" + jobId + " to customer " + customerId)
    return axios.post('/api/customers/job/' + customerId, { jobId })
  }
};

