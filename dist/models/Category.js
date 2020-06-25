"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');


const CategorySchema = new (0, _mongoose.Schema)({
  name: { type: String, required: true }
}, {
  timestamps: true
});

exports. default = _mongoose.model('Category', CategorySchema);
