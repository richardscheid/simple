"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');


const AlertSchema = new (0, _mongoose.Schema)({
  name: { type: String, required: true },
  target: { type: Number, required: true },
  condition: { type: Number, required: true },
  category: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  }
}, {
  timestamps: true
});

exports. default = _mongoose.model('Alert', AlertSchema, 'alert');
