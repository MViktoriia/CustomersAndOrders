const { HttpError } = require('../../helpers');
const Customer = require('../../models/customer');

const getOneById = async (req, res) => {
  const { customerId } = req.params;

  const result = await Customer.findById(customerId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

module.exports = getOneById;
