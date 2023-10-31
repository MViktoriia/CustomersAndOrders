const { HttpError } = require('../../helpers');
const Customer = require('../../models/customer');

const editCustomer = async (req, res) => {
  const { customerId } = req.params;

  const result = await Customer.findByIdAndUpdate(customerId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Not found customer');
  }

  res.json(result);
};

module.exports = editCustomer;
