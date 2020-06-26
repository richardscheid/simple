"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

 const ENVIRONMENT = process.env.NODE_ENV; exports.ENVIRONMENT = ENVIRONMENT;
const prod  = exports.ENVIRONMENT === 'production';

const DB_URI = prod ? process.env.DB_URI : process.env.DB_URI_LOCAL;

if (!DB_URI) {
  if (prod) {
    // logger.error('No mongo connection string. Set DB_URI environment variable.');
  } else {
    // logger.error('No mongo connection string. Set DB_URI_LOCAL environment variable.');
  }
  process.exit(1);
}

 const MONGODB_URI = DB_URI; exports.MONGODB_URI = MONGODB_URI;
