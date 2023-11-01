const { HttpError } = require('../../helpers');
const Order = require('../../models/order');

const editOrder = async (req, res, next) => {
  const { orderId } = req.params;

  const result = await Order.findByIdAndUpdate(orderId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

module.exports = editOrder;
