import { HttpStatus, HttpStatusCode } from '@resources/codes/http.statuscode'
import { Response, Request, NextFunction } from 'express'
import BaseException from './exception.base'
import logger from '@utils/logger'
import i18next from 'i18next'

class ExceptionHandler {

  handle (err: BaseException, req: Request, res: Response, next: NextFunction): void {
    logger.error('Error message:', err)

    const code = err.code || HttpStatusCode.INTERNAL_SERVER
    const status = err.status || HttpStatus.type(HttpStatusCode.INTERNAL_SERVER)
    const message = (code === HttpStatusCode.INTERNAL_SERVER) ? i18next.t('error.internal') : err.message

    res.status(code).json({ code, status, message })

    next(err)
  }
}

export default new ExceptionHandler()
