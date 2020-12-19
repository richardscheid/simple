import { HttpStatus, HttpStatusCode } from '@resources/codes/http.statuscode'
import { Response, Request, NextFunction } from 'express'
import BaseException from './exception.base'
import { logger } from '@utils/logger'
import i18next from 'i18next'

class ExceptionHandler {

  handle (err: BaseException, req: Request, res: Response, next: NextFunction): void {
    logger.error('Error: ', err)

    const status = err.statusCode || HttpStatusCode.INTERNAL_SERVER
    const error = err.error || HttpStatus.error(HttpStatusCode.INTERNAL_SERVER)
    const message = (status === HttpStatusCode.INTERNAL_SERVER) ? i18next.t('error.internal') : err.message

    res.status(status).json({ status, error, message })
  }
}

export default new ExceptionHandler()
