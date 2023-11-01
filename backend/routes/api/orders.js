const express = require('express');
const ctrl = require('../../controllers/orders');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

//Get all orders
//http://localhost:3000/api/orders
router.get('/', ctrlWrapper(ctrl.listOrders));

//Create order
//http://localhost:3000/api/orders
router.post('/', ctrlWrapper(ctrl.addOrder));

//Edit order
//http://localhost:3000/api/orders/{id}
router.put('/:orderId', ctrlWrapper(ctrl.editOrder));

//Remove order
//http://localhost:3000/api/orders/{id}
router.delete('/:orderId', ctrlWrapper(ctrl.removeOrder));

module.exports = router;
