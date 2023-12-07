const express = require('express');
const ctrl = require('../../controllers/orders');
const { ctrlWrapper } = require('../../helpers');
const { authenticate, validateBody, isValidId } = require('../../midlewares');
const { addSchema } = require('../../models/order');

const router = express.Router();

//Get all orders
//http://localhost:3000/api/orders
router.get(
  '/',
  // authenticate,
  ctrlWrapper(ctrl.listOrders)
);

//Create order
//http://localhost:3000/api/orders
router.post(
  '/',
  //   authenticate,
  validateBody(addSchema),
  ctrlWrapper(ctrl.addOrder)
);

//Edit order
//http://localhost:3000/api/orders/{id}
router.put(
  '/:orderId',
  //   authenticate,
  isValidId('orderId'),
  validateBody(addSchema),
  ctrlWrapper(ctrl.editOrder)
);

//Remove order
//http://localhost:3000/api/orders/{id}
router.delete(
  '/:orderId',
  //   authenticate,
  isValidId('orderId'),
  ctrlWrapper(ctrl.removeOrder)
);

module.exports = router;
