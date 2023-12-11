const { Schema, model } = require('mongoose');
const Joi = require('joi');

const orderSchema = new Schema(
  {
    date: { type: String, required: true },
    productName: {
      type: String,
      emum: ['Photo', 'Video', 'Photo & Video', 'Other'],
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'customer',
      required: true,
    },
    hours: String,
    sum: String,
    comment: String,
    workStatus: { type: String, emum: ['done', 'inProgress'] },
    paymentStatus: { type: String, emum: ['paid', 'unpaid'] },
  },
  { versionKey: false, timestamps: true }
);

const Order = model('order', orderSchema);

// Joi schema
const addSchema = Joi.object({
  date: Joi.string().required(),
  productName: Joi.string()
    .valid('Photo', 'Video', 'Photo & Video', 'Other')
    .required(),
  customer: Joi.string().required(),
  hours: Joi.string().allow(''),
  sum: Joi.string().allow(''),
  comment: Joi.string().allow(''),
  workStatus: Joi.string().valid('done', 'inProgress'),
  paymentStatus: Joi.string().valid('paid', 'unpaid'),
});

module.exports = {
  addSchema,
  Order,
};
