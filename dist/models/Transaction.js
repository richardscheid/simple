"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');


const TransactionSchema = new (0, _mongoose.Schema)({
  place: { type: String, required: true },
  order: { type: Number, required: true },
  amount: { type: Number, required: true },
  status: { type: Number, required: true },
  company: { type: String, required: true },
  items: [{
    name: { type: String },
    price: { type: Number }
  }],
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
}, {
  timestamps: true
});

exports. default = _mongoose.model('Transaction', TransactionSchema);
