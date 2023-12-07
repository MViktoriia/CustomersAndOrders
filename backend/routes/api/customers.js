const express = require('express');
const ctrl = require('../../controllers/customers');
const { ctrlWrapper } = require('../../helpers');
const { authenticate, isValidId, validateBody } = require('../../midlewares');
const { addSchema } = require('../../models/customer');

const router = express.Router();
//Get all customers
//http://localhost:3000/api/customers
router.get(
  '/',
  // authenticate,
  ctrlWrapper(ctrl.listCustomers)
);

//Get one customer
//http://localhost:3000/api/customers/{id}
router.get(
  '/:customerId',
  // authenticate,
  isValidId('customerId'),
  ctrlWrapper(ctrl.getOneById)
);

//Create customer
//http://localhost:3000/api/customers
router.post(
  '/',
  // authenticate,
  validateBody(addSchema),
  ctrlWrapper(ctrl.addCustomer)
);

//Delete customer
//http://localhost:3000/api/customers/{id}
router.delete(
  '/:customerId',
  // authenticate,
  isValidId('customerId'),
  ctrlWrapper(ctrl.removeCustomer)
);

//Edit customer
//http://localhost:3000/api/customers/{id}
router.put(
  '/:customerId',
  // authenticate,
  isValidId('customerId'),
  validateBody(addSchema),
  ctrlWrapper(ctrl.editCustomer)
);

module.exports = router;
