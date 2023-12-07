const { Customer } = require('../../models/customer');

const listCustomers = async (req, res, next) => {
  const result = await Customer.find();

  res.json(result);
};

module.exports = listCustomers;
