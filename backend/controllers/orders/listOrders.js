const Order = require('../../models/order');

const listOrders = async (req, res, next) => {
  const result = await Order.find();

  res.json(result);
};

module.exports = listOrders;
