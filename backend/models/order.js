const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    date: String,
    productName: {
      type: String,
      emum: ['Photo', 'Video', 'Photo and Video', 'Other'],
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'customer',
      required: true,
    },
    hours: String,
    sum: String,
    comment: String,
    workStatus: { type: String, emum: ['Done', 'In Progress'] },
    paymentStatus: { type: String, emum: ['Paid', 'Unpaid'] },
  },
  { versionKey: false, timestamps: true }
);

const Order = model('order', orderSchema);

module.exports = Order;
