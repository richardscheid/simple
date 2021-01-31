import dotenv from 'dotenv'
import { logger } from '../../../resources/utils/logger'

dotenv.config()

export const ENVIRONMENT = process.env.NODE_ENV

const PROD : boolean = ENVIRONMENT === 'PROD'

const URI = PROD ? process.env.DB_URI : process.env.DB_URI_LOCAL

const SECRET = process.env.JWT_SECRET

const PORT = process.env.PORT

if (!URI) {
  if (PROD) {
    logger.error('No mongo connection string. Set DB_URI environment variable.')
  } else {
    logger.error('No mongo connection string. Set DB_URI_LOCAL environment variable.')
  }
  process.exit(1)
}

if (!SECRET) {
  logger.error('No jwt secret. Set JWT_SECRET environment variable.')
  process.exit(1)
}

if (!PORT) {
  logger.error('No port found. Set PORT environment variable.')
  process.exit(1)
}

export const MONGODB_URI : string = URI
export const JWT_SECRET : string = SECRET
export const URL = PROD ? process.env.URL : `http://localhost:${PORT}`
