import dotenv from 'dotenv';

dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV;
const prod : boolean = ENVIRONMENT === 'production';

const DB_URI = prod ? process.env.DB_URI : process.env.DB_URI_LOCAL;

if (!DB_URI) {
  if (prod) {
    // logger.error('No mongo connection string. Set DB_URI environment variable.');
  } else {
    // logger.error('No mongo connection string. Set DB_URI_LOCAL environment variable.');
  }
  process.exit(1);
}

export const MONGODB_URI = DB_URI;
