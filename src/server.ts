import app from './app'
import { logger } from '@utils/logger'

app.listen(process.env.PORT, () => {
  logger.info(`> Server ready on port: ${process.env.PORT}`)
})
