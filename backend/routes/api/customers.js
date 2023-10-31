const express = require('express');
const ctrl = require('../../controllers/customers');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();
//Get all customers
//http://localhost:3000/api/customers
router.get('/', ctrlWrapper(ctrl.listCustomers));

//Get one customer
//http://localhost:3000/api/customers/{id}
router.get('/:customerId', ctrlWrapper(ctrl.getOneById));

//Create customer
//http://localhost:3000/api/customers
router.post('/', ctrlWrapper(ctrl.addCustomer));

//Delete customer
//http://localhost:3000/api/customers/{id}
router.delete('/:customerId', ctrlWrapper(ctrl.removeCustomer));

//Edit customer
//http://localhost:3000/api/customers/{id}
router.put('/:customerId', ctrlWrapper(ctrl.editCustomer));

module.exports = router;
