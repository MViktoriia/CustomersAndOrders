const { Customer } = require('../../models/customer');
const { HttpError } = require('../../helpers');

const removeCustomer = async (req, res, next) => {
  const { customerId } = req.params;
  console.log(customerId);
  const result = await Customer.findByIdAndRemove(customerId);

  if (!result) {
    throw HttpError(404, 'Not found customer');
  }

  res.json('Delete success');
};

module.exports = removeCustomer;
