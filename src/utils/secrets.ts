import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV;

const prod : boolean = ENVIRONMENT === 'production';

const URI = prod ? process.env.DB_URI : process.env.DB_URI_LOCAL;

const SECRET = process.env.JWT_SECRET;

if (!URI) {
  if (prod) {
    logger.error('No mongo connection string. Set DB_URI environment variable.');
  } else {
    logger.error('No mongo connection string. Set DB_URI_LOCAL environment variable.');
  }
  process.exit(1);
}

if (!SECRET) {
  logger.error('No jwt secret. Set JWT_SECRET environment variable.');
  process.exit(1);
}

export const MONGODB_URI : string = URI;
export const JWT_SECRET : string = SECRET;
