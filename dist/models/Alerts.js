"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');


const AlertsSchema = new (0, _mongoose.Schema)({
  name: { type: String, required: true },
  target: { type: Number, required: true },
  amount: { type: Number, required: true },
  status: { type: Number, required: true },
  condition: { type: Number, required: true },
  alert: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Alert',
    required: true
  },
  transaction: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Transaction',
    required: true
  }
}, {
  timestamps: true
});

exports. default = _mongoose.model('Alerts', AlertsSchema, 'alerts');
