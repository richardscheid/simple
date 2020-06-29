"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _logger = require('./logger'); var _logger2 = _interopRequireDefault(_logger);

_dotenv2.default.config();

const ENVIRONMENT = process.env.NODE_ENV;

const prod  = ENVIRONMENT === 'production';

const URI = prod ? process.env.DB_URI : process.env.DB_URI_LOCAL;

const SECRET = process.env.SESSION_SECRET;

if (!URI) {
  if (prod) {
    _logger2.default.error('No mongo connection string. Set DB_URI environment variable.');
  } else {
    _logger2.default.error('No mongo connection string. Set DB_URI_LOCAL environment variable.');
  }
  process.exit(1);
}

if (!SECRET) {
  _logger2.default.error('No client secret. Set SESSION_SECRET environment variable.');
  process.exit(1);
}

 const MONGODB_URI  = URI; exports.MONGODB_URI = MONGODB_URI;
 const SESSION_SECRET  = SECRET; exports.SESSION_SECRET = SESSION_SECRET;
