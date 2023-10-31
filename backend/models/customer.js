const { Schema, model } = require('mongoose');

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
      emum: ['instagram', 'friends', 'website'],
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

module.exports = Customer;
