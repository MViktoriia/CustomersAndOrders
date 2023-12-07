const { Schema, model } = require('mongoose');
const Joi = require('joi');

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for customer'],
      unique: true,
    },
    birthday: String,
    source: {
      type: String,
      emum: ['instagram', 'friends', 'website', 'other'],
    },
    email: String,
    phone: String,
    website: String,
    country: String,
    info: String,
  },
  { versionKey: false, timestamps: true }
);

const Customer = model('customer', customerSchema);

// Joi schema
const addSchema = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.string().allow(''),
  source: Joi.string().valid('instagram', 'friends', 'website', 'other'),
  email: Joi.string().email().allow(''),
  phone: Joi.string().allow(''),
  website: Joi.string().allow(''),
  country: Joi.string().allow(''),
  info: Joi.string().allow(''),
});

module.exports = {
  addSchema,
  Customer,
};
