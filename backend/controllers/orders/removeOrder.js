const Order = require('../../models/order');

const removeOrder = async (req, res, next) => {
  const { orderId } = req.params;

  const result = await Order.findByIdAndRemove(orderId);

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json('Delete success');
};

module.exports = removeOrder;
