const Customer = require('../../models/customer');

const addCustomer = async (req, res, next) => {
  const result = await Customer.create(req.body);

  res.status(201).json(result);
};

module.exports = addCustomer;
